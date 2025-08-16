
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AnalyticsSummary from '@/components/dashboard/AnalyticsSummary';
import SalesChart from '@/components/dashboard/SalesChart';
import RecentOrders from '@/components/dashboard/RecentOrders';
import { useDashboard } from '@/hooks/useDashboard';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

const Index = () => {
  const { isLoading } = useDashboard();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your store performance</p>
        </motion.div>
        
        {isLoading ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className="p-6 rounded-lg border bg-card shadow-sm">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-8 w-32 mb-3" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
            
            <div>
              <Skeleton className="h-[400px] w-full rounded-lg" />
            </div>
            
            <div>
              <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <AnalyticsSummary />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
              <SalesChart />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <RecentOrders />
            </motion.div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Index;
