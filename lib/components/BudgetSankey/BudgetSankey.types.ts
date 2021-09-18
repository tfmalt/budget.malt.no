export type BudgetProps = {
  month: string;
  year: string;
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
