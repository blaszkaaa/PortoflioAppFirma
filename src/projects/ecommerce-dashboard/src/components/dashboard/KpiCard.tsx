
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
  description: string;
  color: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  description,
  color,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden h-full">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className={cn("p-2 rounded-full", `${color.replace('text-', 'bg-')}/10`)}>
              <Icon className={cn("h-5 w-5", color)} />
            </div>
            <div className={cn(
              "text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full",
              trend === "up" ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" : 
              trend === "down" ? "text-red-500 bg-red-50 dark:bg-red-950/30" : 
              "text-amber-500 bg-amber-50 dark:bg-amber-950/30"
            )}>
              {change}
              {trend === "up" && <span className="text-emerald-500">↑</span>}
              {trend === "down" && <span className="text-red-500">↓</span>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight">{value}</CardTitle>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default KpiCard;
