
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OrdersTable from '@/components/orders/OrdersTable';
import { useDashboard } from '@/hooks/useDashboard';
import { Skeleton } from '@/components/ui/skeleton';

const Orders = () => {
  const { isLoading } = useDashboard();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
          <p className="text-muted-foreground">View and manage customer orders</p>
        </div>
        
        {isLoading ? (
          <div className="space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-10 w-60" />
              <Skeleton className="h-10 w-32" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-10 w-40" />
              <Skeleton className="h-10 w-40" />
            </div>
            <Skeleton className="h-[600px] w-full rounded-lg" />
          </div>
        ) : (
          <OrdersTable />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Orders;
