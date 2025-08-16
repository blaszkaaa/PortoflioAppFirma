
import { 
  User, 
  Package, 
  Truck, 
  RefreshCcw, 
  DollarSign,
  ShoppingCart,
  Users,
  Percent,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

// KPI Data
export const kpiData = [
  {
    title: "Total Revenue",
    value: "$87,429.00",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "Total revenue this month",
    color: "text-blue-500",
  },
  {
    title: "Orders",
    value: "2,345",
    change: "+8.1%",
    trend: "up",
    icon: ShoppingCart,
    description: "Total orders this month",
    color: "text-purple-500",
  },
  {
    title: "Customers",
    value: "12,938",
    change: "+23.4%",
    trend: "up",
    icon: Users,
    description: "Total customers",
    color: "text-emerald-500",
  },
  {
    title: "Conversion Rate",
    value: "3.75%",
    change: "-0.8%",
    trend: "down",
    icon: Percent,
    description: "Website conversion rate",
    color: "text-amber-500",
  },
];

// Order Status Types
export const orderStatuses = [
  { value: "pending", label: "Pending", icon: RefreshCcw, color: "text-amber-500" },
  { value: "processing", label: "Processing", icon: Package, color: "text-blue-500" },
  { value: "shipped", label: "Shipped", icon: Truck, color: "text-emerald-500" },
  { value: "delivered", label: "Delivered", icon: User, color: "text-purple-500" },
  { value: "cancelled", label: "Cancelled", icon: RefreshCcw, color: "text-red-500" },
];

// Products Data
export const productsData = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    sku: "HDP-001",
    price: 199.99,
    stock: 124,
    category: "Electronics",
    status: "Active",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    sku: "FRN-089",
    price: 249.50,
    stock: 32,
    category: "Furniture",
    status: "Active",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    sku: "APL-123",
    price: 29.99,
    stock: 215,
    category: "Apparel",
    status: "Active",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Smart Home Security Camera",
    sku: "ELC-435",
    price: 89.99,
    stock: 5,
    category: "Electronics",
    status: "Low Stock",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    sku: "KTN-762",
    price: 24.95,
    stock: 0,
    category: "Kitchen",
    status: "Out of Stock",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
];

// Orders Data
export const ordersData = [
  {
    id: "ORD-12345",
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    date: "2023-10-28T09:45:00",
    total: 249.99,
    status: "delivered",
    items: 3,
  },
  {
    id: "ORD-12346",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    date: "2023-10-28T10:15:00",
    total: 89.99,
    status: "shipped",
    items: 1,
  },
  {
    id: "ORD-12347",
    customer: {
      name: "Michael Wong",
      email: "m.wong@example.com",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    date: "2023-10-28T11:30:00",
    total: 124.95,
    status: "processing",
    items: 2,
  },
  {
    id: "ORD-12348",
    customer: {
      name: "Emma Davis",
      email: "emma.d@example.com",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    date: "2023-10-28T12:10:00",
    total: 299.99,
    status: "pending",
    items: 4,
  },
  {
    id: "ORD-12349",
    customer: {
      name: "James Wilson",
      email: "j.wilson@example.com",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    date: "2023-10-28T13:45:00",
    total: 49.99,
    status: "cancelled",
    items: 1,
  },
  {
    id: "ORD-12350",
    customer: {
      name: "Olivia Brown",
      email: "o.brown@example.com",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    date: "2023-10-28T14:20:00",
    total: 149.95,
    status: "delivered",
    items: 2,
  },
];

// Customers Data
export const customersData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    orders: 12,
    spent: 1245.50,
    lastOrder: "2023-10-25",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    orders: 8,
    spent: 879.25,
    lastOrder: "2023-10-27",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "active",
  },
  {
    id: 3,
    name: "Michael Wong",
    email: "m.wong@example.com",
    orders: 5,
    spent: 439.99,
    lastOrder: "2023-10-15",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "active",
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.d@example.com",
    orders: 15,
    spent: 1589.75,
    lastOrder: "2023-10-28",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    status: "active",
  },
  {
    id: 5,
    name: "James Wilson",
    email: "j.wilson@example.com",
    orders: 3,
    spent: 129.99,
    lastOrder: "2023-09-10",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "inactive",
  },
];

// Sales data for charts
export const dailySalesData = [
  { date: "Mon", amount: 1200 },
  { date: "Tue", amount: 1800 },
  { date: "Wed", amount: 1600 },
  { date: "Thu", amount: 2200 },
  { date: "Fri", amount: 1900 },
  { date: "Sat", amount: 2400 },
  { date: "Sun", amount: 1700 },
];

export const monthlySalesData = [
  { date: "Jan", amount: 12000 },
  { date: "Feb", amount: 18000 },
  { date: "Mar", amount: 16000 },
  { date: "Apr", amount: 22000 },
  { date: "May", amount: 19000 },
  { date: "Jun", amount: 24000 },
  { date: "Jul", amount: 28000 },
  { date: "Aug", amount: 26000 },
  { date: "Sep", amount: 32000 },
  { date: "Oct", amount: 35000 },
  { date: "Nov", amount: 29000 },
  { date: "Dec", amount: 38000 },
];

export const categorySalesData = [
  { name: "Electronics", value: 35 },
  { name: "Clothing", value: 25 },
  { name: "Home & Kitchen", value: 20 },
  { name: "Books", value: 10 },
  { name: "Others", value: 10 },
];

export const comparisonData = {
  thisYear: [
    { month: "Jan", amount: 12000 },
    { month: "Feb", amount: 18000 },
    { month: "Mar", amount: 16000 },
    { month: "Apr", amount: 22000 },
    { month: "May", amount: 19000 },
    { month: "Jun", amount: 24000 },
  ],
  lastYear: [
    { month: "Jan", amount: 10000 },
    { month: "Feb", amount: 15000 },
    { month: "Mar", amount: 14000 },
    { month: "Apr", amount: 18000 },
    { month: "May", amount: 17000 },
    { month: "Jun", amount: 21000 },
  ],
};

// Product Categories
export const productCategories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Beauty & Personal Care",
  "Toys & Games",
  "Sports & Outdoors",
  "Automotive",
  "Health & Household",
];
