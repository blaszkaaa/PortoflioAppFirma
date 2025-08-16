
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ArrowLeft, 
  Printer, 
  Mail, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  CreditCard,
  Eye
} from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ordersData, orderStatuses, productsData } from '@/data/mockData';

const OrderDetails: React.FC = () => {
  const { id } = useParams();
  
  // Find the order
  const order = ordersData.find(order => order.id === id) || ordersData[0];
  const statusInfo = orderStatuses.find(status => status.value === order.status) || orderStatuses[0];
  const StatusIcon = statusInfo.icon;

  // Mock order items
  const orderItems = [
    {
      product: productsData[0],
      quantity: 1,
      price: productsData[0].price,
    },
    {
      product: productsData[2],
      quantity: 2,
      price: productsData[2].price,
    },
  ];

  // Mock shipping address
  const shippingAddress = {
    name: order.customer.name,
    address1: "123 Main Street",
    address2: "Apt 4B",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
    phone: "(555) 123-4567",
  };

  // Mock billing address
  const billingAddress = {
    name: order.customer.name,
    address1: "123 Main Street",
    address2: "Apt 4B",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
  };

  // Mock payment details
  const paymentDetails = {
    method: "Credit Card",
    cardType: "Visa",
    cardLast4: "4242",
    subtotal: orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    shipping: 12.99,
    tax: orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.08,
  };

  // Calculate totals
  const subtotal = paymentDetails.subtotal;
  const shipping = paymentDetails.shipping;
  const tax = paymentDetails.tax;
  const total = subtotal + shipping + tax;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'PPP');
  };

  const formatTime = (dateString: string) => {
    return format(new Date(dateString), 'p');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/orders" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Orders
            </Link>
          </Button>
          <Badge 
            variant="outline" 
            className={cn(
              "flex items-center gap-1 capitalize",
              statusInfo.color,
              "border border-current/20 bg-current/10"
            )}
          >
            <StatusIcon className={cn("h-3 w-3", statusInfo.color)} />
            {statusInfo.label}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            Email Invoice
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            Print Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{order.id}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{formatDate(order.date)}</span>
                  <span>•</span>
                  <Clock className="h-3.5 w-3.5" />
                  <span>{formatTime(order.date)}</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium">Product</th>
                  <th className="text-center py-3 font-medium">Quantity</th>
                  <th className="text-right py-3 font-medium">Price</th>
                  <th className="text-right py-3 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="border-b"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 rounded-sm">
                          <AvatarImage src={item.product.image} alt={item.product.name} />
                          <AvatarFallback className="rounded-sm">{item.product.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{item.product.name}</p>
                          <p className="text-xs text-muted-foreground">SKU: {item.product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4">{item.quantity}</td>
                    <td className="text-right py-4">{formatCurrency(item.price)}</td>
                    <td className="text-right py-4">{formatCurrency(item.price * item.quantity)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center font-medium text-lg">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Customer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
                  <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{order.customer.name}</h3>
                  <p className="text-sm text-muted-foreground">{order.customer.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Link to={`/customers/${order.customer.name.toLowerCase().replace(' ', '-')}`}>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    View Customer
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p className="font-medium">{shippingAddress.name}</p>
                <p>{shippingAddress.address1}</p>
                {shippingAddress.address2 && <p>{shippingAddress.address2}</p>}
                <p>{`${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postalCode}`}</p>
                <p>{shippingAddress.country}</p>
                <div className="flex items-center gap-2 pt-1">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{shippingAddress.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{paymentDetails.method}</span>
                </div>
                <p>{`${paymentDetails.cardType} ending in ${paymentDetails.cardLast4}`}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
