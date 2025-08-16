
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ProductsTable from '@/components/products/ProductsTable';
import { useDashboard } from '@/hooks/useDashboard';
import { Skeleton } from '@/components/ui/skeleton';

const Products = () => {
  const { isLoading } = useDashboard();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory and pricing</p>
        </div>
        
        {isLoading ? (
          <div className="space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-10 w-60" />
              <Skeleton className="h-10 w-32" />
            </div>
            <Skeleton className="h-[600px] w-full rounded-lg" />
          </div>
        ) : (
          <ProductsTable />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Products;
