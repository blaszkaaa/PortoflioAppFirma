
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CustomerProfile from '@/components/customers/CustomerProfile';
import { useDashboard } from '@/hooks/useDashboard';
import { Skeleton } from '@/components/ui/skeleton';

const CustomerProfilePage = () => {
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
          
          <Skeleton className="h-[200px] rounded-lg" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton className="h-[100px] rounded-lg" />
            <Skeleton className="h-[100px] rounded-lg" />
            <Skeleton className="h-[100px] rounded-lg" />
          </div>
          
          <div className="space-y-2">
            <Skeleton className="h-10 w-full max-w-[400px] rounded-lg" />
            <Skeleton className="h-[400px] rounded-lg" />
          </div>
        </div>
      ) : (
        <CustomerProfile />
      )}
    </DashboardLayout>
  );
};

export default CustomerProfilePage;
