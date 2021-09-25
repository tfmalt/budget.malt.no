import React from 'react';
import Chart from 'react-google-charts';
import { Typography } from '@mui/material';
import { linkColors, nodeColors } from '../../colors';
import { useAuth0 } from '@auth0/auth0-react';
import type { BudgetSankeyProps, BudgetStreamRow, BudgetStream, BudgetChartData } from '../../Budget.types';

import styles from '../../../styles/BudgetSankey.module.scss';

export const BudgetSankey = ({ month, year }: BudgetSankeyProps) => {
  const { getAccessTokenSilently } = useAuth0();

  const [chartData, setChartData] = React.useState<BudgetChartData>([
    ['From', 'To', 'kr', { type: 'string', role: 'tooltip' }],
    ['A', 'B', 10, 'foo'],
  ]);

  /**
   * Fetch new data on update
   */
  React.useEffect(() => {
    (async () => {
      console.log('use effect called:', month, year);
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://api.malt.no/budget',
          scope: 'read:streams',
        });

        // console.log('token', token);
        // https://api.malt.no/budget/streams/2021/8
        const url = `${process.env.NEXT_PUBLIC_API_HOST}/budget/streams/${year}/${parseInt(month) + 1}`;
        // console.log(url);
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data: BudgetStream = await res.json();
        const chartData: BudgetChartData = [['From', 'To', 'Kr ', { type: 'string', role: 'tooltip' }]];
        data.values.forEach((item: BudgetStreamRow) => {
          chartData.push([
            item[0],
            item[1],
            item[2],
            `<div style="white-space: nowrap; padding: 8px;"><strong>${item[1]}</strong><br/>kr ${item[2].toFixed(
              2
            )}</div>`,
          ]);
        });
        console.log(chartData);
        setChartData(chartData);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [month, year, getAccessTokenSilently]);

  const period = new Date(parseInt(year), parseInt(month), 12);
  return (
    <div id="budget-sankey-section" className={styles.graph}>
      <Typography variant="h5" className={styles.titleh5}>
        {period.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </Typography>
      <Chart
        chartType="Sankey"
        width={'calc(100vw - 48px)'}
        height={'calc((100vw * (9/16)) - 88px)'}
        style={{ minHeight: '288px' }}
        options={{
          sankey: {
            iterations: 16,
            link: { colors: linkColors[200], colorMode: 'gradient' },
            node: {
              colors: nodeColors[800],
              width: 40,
              label: { color: '#444', fontName: 'Roboto', fontSize: 12 },
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
    </div>
  );
};
