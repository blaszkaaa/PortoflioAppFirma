
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BarChart2, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  ShoppingBag,
  Package,
  Bell,
  Edit
} from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { customersData, ordersData } from '@/data/mockData';
import { 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  BarChart, 
  Bar 
} from 'recharts';

const CustomerProfile: React.FC = () => {
  const { id } = useParams();
  
  // Find the customer
  const customer = customersData.find(customer => customer.id === Number(id)) || customersData[0];
  
  // Mock customer data
  const customerDetails = {
    ...customer,
    phone: "(555) 123-4567",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    createdAt: "2022-09-28T09:45:00",
    orders: [ordersData[0], ordersData[2], ordersData[4]],
    notes: [
      { id: 1, content: "Called about order issue", date: "2023-10-20T10:30:00", user: "Admin" },
      { id: 2, content: "VIP customer - provide priority support", date: "2023-09-15T14:20:00", user: "Sales Rep" },
    ],
  };

  // Mock purchase history data for charts
  const purchaseHistoryData = [
    { month: 'Jan', amount: 120 },
    { month: 'Feb', amount: 0 },
    { month: 'Mar', amount: 75 },
    { month: 'Apr', amount: 240 },
    { month: 'May', amount: 180 },
    { month: 'Jun', amount: 0 },
    { month: 'Jul', amount: 325 },
    { month: 'Aug', amount: 0 },
    { month: 'Sep', amount: 180 },
    { month: 'Oct', amount: 0 },
    { month: 'Nov', amount: 450 },
    { month: 'Dec', amount: 150 },
  ];

  const productPreferencesData = [
    { category: 'Electronics', amount: 450 },
    { category: 'Clothing', amount: 300 },
    { category: 'Books', amount: 200 },
    { category: 'Home', amount: 150 },
    { category: 'Beauty', amount: 50 },
  ];

  const orderStatusData = [
    { status: 'Delivered', count: 8 },
    { status: 'Shipped', count: 2 },
    { status: 'Processing', count: 1 },
    { status: 'Cancelled', count: 1 },
  ];

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
        <Button variant="outline" size="sm" asChild>
          <Link to="/customers" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Customers
          </Link>
        </Button>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            Email Customer
          </Button>
          <Button size="sm" className="flex items-center gap-1">
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-3">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={customer.avatar} alt={customer.name} />
                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{customer.name}</h2>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "capitalize ml-2",
                      customer.status === 'active' 
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400' 
                        : 'border-gray-200 bg-gray-50 text-gray-600 dark:border-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                    )}
                  >
                    {customer.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>{customerDetails.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {customerDetails.address.city}, {customerDetails.address.state}, {customerDetails.address.country}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                  <span>
                    <span className="font-medium text-foreground">{customerDetails.orders.length}</span> Orders
                  </span>
                  <span>
                    <span className="font-medium text-foreground">{formatCurrency(customer.spent)}</span> Lifetime Spent
                  </span>
                  <span>
                    <span className="font-medium text-foreground">
                      {formatDate(customerDetails.createdAt)}
                    </span> Customer Since
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:col-span-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">{customer.orders}</div>
                <div className="text-sm text-muted-foreground">orders</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">{formatCurrency(customer.spent)}</div>
                <div className="text-sm text-emerald-500">
                  +12.5% <span>↑</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Last Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">{formatDate(customer.lastOrder)}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="md:col-span-3">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notes
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Recent orders from this customer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerDetails.orders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-accent/40 transition-colors"
                    >
                      <div>
                        <Link to={`/orders/${order.id}`} className="font-medium hover:underline">
                          {order.id}
                        </Link>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {formatDate(order.date)}
                          <span className="mx-1">•</span>
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {formatTime(order.date)}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center">
                            <DollarSign className="h-3.5 w-3.5 mr-0.5 text-muted-foreground" />
                            <span className="font-medium">{formatCurrency(order.total)}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Package className="h-3.5 w-3.5 mr-1" />
                            {order.items} {order.items === 1 ? 'item' : 'items'}
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "capitalize",
                            order.status === 'delivered' 
                              ? 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400' 
                              : order.status === 'shipped'
                              ? 'border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-400'
                              : order.status === 'processing'
                              ? 'border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-400'
                              : 'border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400'
                          )}
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Purchase History</CardTitle>
                  <CardDescription>Monthly spending patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={purchaseHistoryData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis 
                          stroke="#94a3b8"
                          tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip 
                          formatter={(value: number) => [`$${value}`, 'Amount']}
                        />
                        <Bar dataKey="amount" fill="#3b82f6" barSize={30} radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Product Preferences</CardTitle>
                  <CardDescription>Spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={productPreferencesData}
                        layout="vertical"
                        margin={{ left: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis 
                          type="number"
                          stroke="#94a3b8"
                          tickFormatter={(value) => `$${value}`}
                        />
                        <YAxis 
                          type="category" 
                          dataKey="category" 
                          stroke="#94a3b8"
                        />
                        <Tooltip 
                          formatter={(value: number) => [`$${value}`, 'Amount']}
                        />
                        <Bar dataKey="amount" fill="#8b5cf6" barSize={20} radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="notes" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Customer Notes</span>
                  <Button variant="outline" size="sm">Add Note</Button>
                </CardTitle>
                <CardDescription>Internal notes about this customer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerDetails.notes.map((note, index) => (
                    <motion.div
                      key={note.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-border/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{note.user}</span>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(note.date)} at {formatTime(note.date)}
                        </span>
                      </div>
                      <p className="text-sm">{note.content}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerProfile;
