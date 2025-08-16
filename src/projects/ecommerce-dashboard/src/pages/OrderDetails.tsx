
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OrderDetails from '@/components/orders/OrderDetails';
import { useDashboard } from '@/hooks/useDashboard';
import { Skeleton } from '@/components/ui/skeleton';

const OrderDetailsPage = () => {
  const { isLoading } = useDashboard();

  return (
    <DashboardLayout>
      {isLoading ? (
        <div className="space-y-6">
          <div className="flex justify-between">
            <Skeleton className="h-10 w-32" />
            <div className="flex gap-2">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-[400px] md:col-span-2 rounded-lg" />
            <div className="space-y-6">
              <Skeleton className="h-[150px] rounded-lg" />
              <Skeleton className="h-[200px] rounded-lg" />
            </div>
          </div>
        </div>
      ) : (
        <OrderDetails />
      )}
    </DashboardLayout>
  );
};

export default OrderDetailsPage;
