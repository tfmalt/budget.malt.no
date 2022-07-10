import * as React from 'react';
import Chart from 'react-google-charts';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { linkColors, nodeColors } from '../../colors';
import { useAuth0 } from '@auth0/auth0-react';
import type { BudgetSankeyProps, BudgetStreamRow, BudgetStream, BudgetChartData } from '../../Budget.types';

import { theme } from '../../../styles/theme';
import styles from './budget-sankey.module.scss';

export const BudgetSankey = ({ month, year, width, height, maxWidth, maxHeight, update }: BudgetSankeyProps) => {
  const { getAccessTokenSilently } = useAuth0();
  const isMediaLarge = useMediaQuery('(min-width:600px)');

  const [chartData, setChartData] = React.useState<BudgetChartData>([
    ['From', 'To', 'kr', { type: 'string', role: 'tooltip' }],
    ['A', 'B', 10, 'foo'],
  ]);
  const [lastUpdate, setLastUpdated] = React.useState(new Date(0));

  /**
   * Fetch new data on update
   */
  React.useEffect(() => {
    (async () => {
      const now = new Date();
      console.log('use effect called:', month, year, now.toJSON());
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://api.malt.no/budget',
          scope: 'read:streams',
        });

        let url = `${process.env.NEXT_PUBLIC_API_HOST}/budget/streams/${year}${
          parseInt(month) < 99 ? `/${parseInt(month) + 1}` : ''
        }`;

        console.log('fetching url:', url);
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data: BudgetStream = await res.json();
        console.log('got data:', data);
        setLastUpdated(new Date(data.timestamp));
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
        // console.log(chartData);
        setChartData(chartData);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [month, year, update, getAccessTokenSilently]);

  const period = new Date(parseInt(year), parseInt(month), 12);

  return (
    <Box>
      <Typography variant="h2">
        {parseInt(month) < 99
          ? period.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
          : `All of ${year}`}
      </Typography>
      <Typography variant="caption">
        Sist oppdatert:{' '}
        {lastUpdate.toLocaleString('no-NO', {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </Typography>
      <Chart
        chartType="Sankey"
        style={{
          width: width || 400,
          height: height || 400,
          maxWidth: maxWidth || '100%',
          maxHeight: maxHeight || `calc(100vw - 128px)`,
        }}
        options={{
          sankey: {
            iterations: 256,
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
    </Box>
  );
};
