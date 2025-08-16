
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ProductForm from '@/components/products/ProductForm';
import { useDashboard } from '@/hooks/useDashboard';

const ProductNew = () => {
  const { isSubmitting, handleSubmit } = useDashboard();

  const onSubmit = async (data: any) => {
    const result = await handleSubmit(data, "Product created successfully!");
    if (result) {
      // Placeholder for redirect to product detail or product list
      console.log("Product created:", data);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Product</h1>
          <p className="text-muted-foreground">Add a new product to your catalog</p>
        </div>
        
        <ProductForm 
          onSubmit={onSubmit} 
        />
      </div>
    </DashboardLayout>
  );
};

export default ProductNew;
