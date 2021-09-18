import React from 'react';
import Chart from 'react-google-charts';
import { linkColors, nodeColors } from '../../colors';
import styles from '../../../styles/BudgetSankey.module.scss';

type BudgetProps = {
  month: number;
  year: number;
};

const BudgetSankey = ({ month, year }: BudgetProps) => {
  const fetchStream = async () => {
    // https://api.malt.no/budget/streams/2021/8
    const url = `${process.env.NEXT_PUBLIC_API_HOST}/budget/streams/${year}/${month + 1}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  React.useEffect(() => {
    console.log('use effect called:', month, year);
    fetchStream();
  });

  const chartData = [
    ['From', 'To', 'Kr ', { type: 'string', role: 'tooltip' }],
    ['A', 'X', 5, 'A-X'],
    ['A', 'Y', 7, 'A-Y'],
    ['A', 'Z', 6, 'A-Z'],
    ['B', 'X', 2, 'B-X'],
    ['B', 'Y', 9, 'B-Y'],
    ['B', 'Z', 4, 'B-Z'],
    ['X', 'D', 3, 'X-D'],
    ['Y', 'E', 1, 'Y-E'],
    ['Z', 'F', 5, 'Z-F'],
  ];

  // foo
  return (
    <section id="budget-sankey-section" className={styles.graph}>
      <div>
        hello: {year} {month}
      </div>
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
          animation: {
            duration: 1000,
            easing: 'out',
          },
        }}
        data={chartData}
      />
    </section>
  );
};

export default BudgetSankey;
