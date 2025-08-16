
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const gridVariants = cva("grid", {
  variants: {
    columns: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
      "5": "grid-cols-5",
      "6": "grid-cols-6",
      "none": "",
    },
    gap: {
      "0": "gap-0",
      "1": "gap-1",
      "2": "gap-2",
      "3": "gap-3",
      "4": "gap-4",
      "5": "gap-5",
      "6": "gap-6",
      "8": "gap-8",
      "10": "gap-10",
      "none": "",
    },
  },
  defaultVariants: {
    columns: "none",
    gap: "none",
  },
});

type GridColumnResponsiveConfig = {
  initial?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
};

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof gridVariants>, "columns"> {
  columns?: string | GridColumnResponsiveConfig;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, gap, ...props }, ref) => {
    // Handle responsive columns
    let responsiveClasses = "";
    if (typeof columns === "object") {
      const { initial, sm, md, lg, xl, "2xl": xxl } = columns as GridColumnResponsiveConfig;
      
      if (initial) responsiveClasses += ` grid-cols-${initial}`;
      if (sm) responsiveClasses += ` sm:grid-cols-${sm}`;
      if (md) responsiveClasses += ` md:grid-cols-${md}`;
      if (lg) responsiveClasses += ` lg:grid-cols-${lg}`;
      if (xl) responsiveClasses += ` xl:grid-cols-${xl}`;
      if (xxl) responsiveClasses += ` 2xl:grid-cols-${xxl}`;
    }

    return (
      <div
        ref={ref}
        className={cn(
          gridVariants({ 
            columns: typeof columns === "string" ? columns as any : "none", 
            gap 
          }),
          responsiveClasses,
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";
