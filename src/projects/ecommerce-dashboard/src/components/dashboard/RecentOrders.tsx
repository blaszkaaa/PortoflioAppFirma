
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { orderStatuses, ordersData } from '@/data/mockData';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecentOrdersProps {
  className?: string;
  limit?: number;
}

const RecentOrders: React.FC<RecentOrdersProps> = ({ className, limit = 5 }) => {
  const orders = ordersData.slice(0, limit);

  // Helper to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Helper to get status info
  const getStatusInfo = (status: string) => {
    return orderStatuses.find(s => s.value === status) || orderStatuses[0];
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link to="/orders">
            View All 
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order, index) => {
            const statusInfo = getStatusInfo(order.status);
            const StatusIcon = statusInfo.icon;

            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-accent/40 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
                    <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{order.customer.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <p>{order.id}</p> 
                      <span className="mx-1">•</span>
                      <p>{format(new Date(order.date), 'MMM d, h:mm a')}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(order.total)}</p>
                    <p className="text-sm text-muted-foreground">{order.items} item{order.items !== 1 ? 's' : ''}</p>
                  </div>
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
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
