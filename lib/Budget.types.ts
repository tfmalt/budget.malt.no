import React from 'react';
export type BudgetSankeyProps = {
  month: string;
  year: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

export type YearMonthSelectorProps = {
  onYearChange?: Function;
  onMonthChange?: Function;
  years: number[];
};

export type BudgetHomeProps = {
  years: number[];
};

export type BudgetStreamRow = [string, string, number, string];
export type BudgetTreamHeader = [string, string, string, object];
export interface BudgetStream {
  values: BudgetStreamRow[];
  cacheHit: boolean;
  cacheTtl: number;
  description: string;
  timestamp: string;
  version: string;
}

export type BudgetChartData = (BudgetStreamRow | BudgetTreamHeader)[];
