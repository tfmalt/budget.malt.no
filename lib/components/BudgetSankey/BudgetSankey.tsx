import React from 'react';
import Chart from 'react-google-charts';
import { Typography } from '@mui/material';
import { linkColors, nodeColors } from '../../colors';
import type { BudgetProps, BudgetStreamRow, BudgetStream, BudgetChartData } from './BudgetSankey.types';

import styles from '../../../styles/BudgetSankey.module.scss';

const BudgetSankey = ({ month, year }: BudgetProps) => {
  const [chartData, setChartData] = React.useState<BudgetChartData>([
    ['From', 'To', 'kr', { type: 'string', role: 'tooltip' }],
    ['A', 'B', 10, 'foo'],
  ]);

  /**
   * Fetch the data from the backend.
   */
  const fetchStream = async () => {
    // https://api.malt.no/budget/streams/2021/8
    const url = `${process.env.NEXT_PUBLIC_API_HOST}/budget/streams/${year}/${parseInt(month) + 1}`;
    console.log(url);
    const res = await fetch(url);
    const data: BudgetStream = await res.json();
    console.log(data);
    const chartData: BudgetChartData = [['From', 'To', 'Kr ', { type: 'string', role: 'tooltip' }]];
    data.values.forEach((item: BudgetStreamRow) => {
      chartData.push([item[0], item[1], item[2], `<div>kr ${item[2].toFixed(2)}</div>`]);
    });
    console.log(chartData);
    setChartData(chartData);
  };

  React.useEffect(() => {
    console.log('use effect called:', month, year);
    fetchStream();
  }, [month, year]);

  const period = new Date(parseInt(year), parseInt(month), 12);
  // foo
  return (
    <section id="budget-sankey-section" className={styles.graph}>
      <Typography variant="h5" className={styles.titleh5}>
        Money stream for {period.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </Typography>
      <Chart
        chartType="Sankey"
        width={'100%'}
        height={'calc(100vh - 216px'}
        loader={<div>Loading Chart</div>}
        options={{
          sankey: {
            iterations: 64,
            link: { colors: linkColors[200], colorMode: 'gradient' },
            node: {
              colors: nodeColors[800],
              width: 40,
              label: { color: '#444', fontName: 'Roboto', fontSize: 14 },
            },
          },
          tooltip: {
            isHtml: true,
            textStyle: {
              fontSize: 12,
            },
          },
        }}
        data={chartData}
      />
    </section>
  );
};

export default BudgetSankey;
