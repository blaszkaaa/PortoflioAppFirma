import asyncio
from binance.client import Client
from binance.exceptions import BinanceAPIException, BinanceOrderException
import ssl
import aiohttp

# Ustawienia API
api_key = ''
api_secret = ''
client = Client(api_key, api_secret)

# Pary do arbitrażu
symbol1 = 'BTCUSDT'
symbol2 = 'ETHBTC'
symbol3 = 'ETHUSDT'

# Progi minimalnych zysków do realizacji transakcji
min_profit_threshold = 0.001
trading_fee = 0.001
max_trade_size_usd = 10
min_order_volume = 0.001
max_volatility_threshold = 0.05

# Tworzymy niestandardowy kontekst SSL, który wyłącza weryfikację certyfikatu
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# Funkcja asynchroniczna do pobierania danych z rynku
async def get_order_book(symbol):
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(f'https://api.binance.com/api/v3/depth?symbol={symbol}&limit=5', ssl=ssl_context) as response:
                return await response.json()
    except Exception as e:
        print(f"Błąd podczas pobierania order book dla {symbol}: {e}")
        return None

def check_market_depth(order_book, volume_needed):
    total_volume = 0
    if order_book:
        for order in order_book['asks']:
            price = float(order[0])
            volume = float(order[1])
            total_volume += volume
            if total_volume >= volume_needed:
                return True
    return False

def calculate_arbitrage(order_book1, order_book2, order_book3):
    ask1 = float(order_book1['asks'][0][0])
    bid1 = float(order_book1['bids'][0][0])
    ask2 = float(order_book2['asks'][0][0])
    bid2 = float(order_book2['bids'][0][0])
    ask3 = float(order_book3['asks'][0][0])
    bid3 = float(order_book3['bids'][0][0])

    max_btc_to_buy = max_trade_size_usd / ask1
    btc_bought = max_btc_to_buy * (1 - trading_fee)
    eth_bought = btc_bought / ask2 * (1 - trading_fee)
    final_amount = eth_bought * bid3 * (1 - trading_fee)

    profit = final_amount - max_trade_size_usd
    profit_percent = (profit / max_trade_size_usd) * 100

    return profit, profit_percent

def calculate_volatility(symbol):
    try:
        klines = client.get_klines(symbol=symbol, interval=Client.KLINE_INTERVAL_1MINUTE, limit=10)
        prices = [float(kline[4]) for kline in klines]
        volatility = (max(prices) - min(prices)) / min(prices)
        return volatility
    except Exception as e:
        print(f"Błąd podczas obliczania zmienności dla {symbol}: {e}")
        return None

async def execute_arbitrage():
    try:
        # Pobieranie danych z rynku
        order_book1 = await get_order_book(symbol1)
        order_book2 = await get_order_book(symbol2)
        order_book3 = await get_order_book(symbol3)

        if not all([order_book1, order_book2, order_book3]):
            print("Nie udało się pobrać order book dla wszystkich par.")
            return
        
        # Obliczenie zmienności rynku
        volatility1 = calculate_volatility(symbol1)
        volatility2 = calculate_volatility(symbol2)
        volatility3 = calculate_volatility(symbol3)
        
        # Sprawdzanie, czy zmienność jest prawidłowo obliczona
        if any(v is None for v in [volatility1, volatility2, volatility3]):
            print("Błąd podczas obliczania zmienności. Operacja przerwana.")
            return
        
        if any(v > max_volatility_threshold for v in [volatility1, volatility2, volatility3]):
            print("Zbyt wysoka zmienność na rynku, arbitraż wstrzymany.")
            return
        
        # Głębia rynku
        if not all([check_market_depth(order_book1, min_order_volume),
                    check_market_depth(order_book2, min_order_volume),
                    check_market_depth(order_book3, min_order_volume)]):
            print("Brak wystarczającej głębokości rynku.")
            return

        # Obliczenie zysku
        profit, profit_percent = calculate_arbitrage(order_book1, order_book2, order_book3)
        if profit_percent > min_profit_threshold:
            print(f"Zysk: {profit_percent:.2f}% - Realizacja arbitrażu")
            # Tutaj dodajemy logikę realizacji zleceń
        else:
            print(f"Brak wystarczającego zysku. Obliczony zysk: {profit_percent:.2f}%")
    except Exception as e:
        print(f"Niespodziewany błąd: {e}")

async def main():
    while True:
        await execute_arbitrage()
        await asyncio.sleep(5)

loop = asyncio.get_event_loop()
loop.run_until_complete(main())