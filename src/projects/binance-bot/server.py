from flask import Flask, render_template
import asyncio
import threading
from binance.client import Client
import aiohttp
import ssl

app = Flask(__name__)

# Ustawienia API Binance
api_key = 'bJpjwtfDwlRpDE9J5w2V7yb4NAKKJ9BZuWTfOxsDJ1cI8ZNwwBI4v3JqTaPUMwjT'
api_secret = 'XeygCkkOH5COWTTvPSuVd3sTn5U4eGOjVZdWR7S90245MKZyZsYavkaewGYn0BRz'
client = Client(api_key, api_secret)

# Lista par kryptowalutowych do analizy
pairs = [
    ('ADAUSDT', 'ADAETH', 'ETHUSDT'),
    ('BNBUSDT', 'BNBETH', 'ETHUSDT'),
    ('SOLUSDT', 'SOLETH', 'ETHUSDT'),
    ('DOTUSDT', 'DOTETH', 'ETHUSDT')
]

# Przechowywanie danych arbitrażu
arbitrage_data = []

# Tworzymy niestandardowy kontekst SSL, który wyłącza weryfikację certyfikatu
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

async def get_order_book(symbol):
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(f'https://api.binance.com/api/v3/depth?symbol={symbol}&limit=500', ssl=ssl_context) as response:
                return await response.json()
    except Exception as e:
        print(f"Błąd podczas pobierania order book dla {symbol}: {e}")
        return None

def calculate_price_with_depth(order_book, volume_needed):
    """Oblicza średnią cenę na podstawie dostępnej głębokości rynku."""
    total_volume = 0
    total_cost = 0
    for order in order_book['asks']:
        price = float(order[0])
        volume = float(order[1])
        
        if total_volume + volume >= volume_needed:
            remaining_volume = volume_needed - total_volume
            total_cost += remaining_volume * price
            break
        else:
            total_cost += volume * price
            total_volume += volume
    
    if total_volume == 0:
        return None  # Brak dostępnej płynności
    else:
        return total_cost / volume_needed  # Zwracamy średnią cenę zakupu

def calculate_arbitrage(order_book1, order_book2, order_book3):
    """Oblicz zysk z uwzględnieniem mniejszego wolumenu, jeśli brak głębokości rynku."""
    available_volume1 = float(order_book1['asks'][0][1])
    available_volume2 = float(order_book2['asks'][0][1])
    available_volume3 = float(order_book3['asks'][0][1])

    min_volume = min(available_volume1, available_volume2, available_volume3)

    ask1 = calculate_price_with_depth(order_book1, min_volume)
    ask2 = calculate_price_with_depth(order_book2, min_volume)
    bid3 = calculate_price_with_depth(order_book3, min_volume)

    if None in [ask1, ask2, bid3]:
        return None, None

    # Kupno za USDT (symbol1)
    asset1_bought = min_volume * (1 - 0.001)  # Uwzględniamy opłatę 0.1%
    
    # Sprzedaż za ETH (symbol2)
    asset2_bought = asset1_bought / ask2 * (1 - 0.001)
    
    # Sprzedaż ETH za USDT (symbol3)
    final_amount = asset2_bought * bid3 * (1 - 0.001)

    # Obliczanie zysku
    profit = final_amount - (min_volume * ask1)
    profit_percent = (profit / (min_volume * ask1)) * 100

    return profit, profit_percent

# Funkcja do analizowania wszystkich par i aktualizowania danych
async def analyze_all_pairs():
    global arbitrage_data
    arbitrage_data = []  # Czyścimy dane przed kolejną analizą

    for pair in pairs:
        symbol1, symbol2, symbol3 = pair
        order_book1 = await get_order_book(symbol1)
        order_book2 = await get_order_book(symbol2)
        order_book3 = await get_order_book(symbol3)

        if not all([order_book1, order_book2, order_book3]):
            arbitrage_data.append({
                'pair': f"{symbol1} -> {symbol2} -> {symbol3}",
                'profit': 'N/A',
                'status': 'Brak danych'
            })
            continue

        profit, profit_percent = calculate_arbitrage(order_book1, order_book2, order_book3)
        
        if profit_percent:
            arbitrage_data.append({
                'pair': f"{symbol1} -> {symbol2} -> {symbol3}",
                'profit': f"{profit_percent:.2f}%",
                'status': 'Zysk'
            })
        else:
            arbitrage_data.append({
                'pair': f"{symbol1} -> {symbol2} -> {symbol3}",
                'profit': 'N/A',
                'status': 'Brak wystarczającej głębokości rynku'
            })

# Uruchamiamy arbitraż w tle
def run_arbitrage_loop():
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    while True:
        loop.run_until_complete(analyze_all_pairs())
        asyncio.sleep(10)

# Uruchamiamy serwer Flask
@app.route('/')
def index():
    global arbitrage_data
    return render_template('index.html', arbitrage_data=arbitrage_data)

if __name__ == '__main__':
    # Uruchamiamy wątek do symulacji arbitrażu
    threading.Thread(target=run_arbitrage_loop).start()

    # Uruchamiamy serwer Flask
    app.run(debug=True)