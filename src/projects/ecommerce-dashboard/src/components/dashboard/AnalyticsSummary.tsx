
import React from 'react';
import { Grid } from '@/components/ui/grid';
import KpiCard from './KpiCard';
import { kpiData } from '@/data/mockData';

interface AnalyticsSummaryProps {
  className?: string;
}

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({ className }) => {
  return (
    <Grid columns={{ initial: "1", sm: "2", lg: "4" }} gap="4" className={className}>
      {kpiData.map((kpi, index) => (
        <KpiCard
          key={index}
          title={kpi.title}
          value={kpi.value}
          change={kpi.change}
          trend={kpi.trend as "up" | "down" | "neutral"}
          icon={kpi.icon}
          description={kpi.description}
          color={kpi.color}
        />
      ))}
    </Grid>
  );
};

export default AnalyticsSummary;
