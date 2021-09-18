import type { NextPage } from 'next';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import packageInfo from '../package.json';
import styles from '../styles/Home.module.scss';
import BudgetSankey from '../lib/components/BudgetSankey/BudgetSankey';
import type { BudgetHomeProps } from '../lib/Budget.types';
import { NoEncryption } from '@mui/icons-material';

const BudgetHome: NextPage<BudgetHomeProps> = ({ years }) => {
  const now = new Date();
  const allMonths = 'January February March April May June July August September October November December'
    .split(' ')
    .map((m, i) => [m, i]);

  const filterMonths = (mons: any[][], y: number) => {
    return mons.filter((m) => {
      if (y < now.getFullYear()) return true;
      if (m[1] <= now.getMonth()) return true;
      return false;
    });
  };

  const [year, setYear] = React.useState(now.getFullYear().toString());
  const [month, setMonth] = React.useState(now.getMonth().toString());
  const [months, setMonths] = React.useState(filterMonths(allMonths, parseInt(year, 10)));

  // const years = [2018, 2019, 2020, 2021];
  console.log('list of months:', allMonths, months);

  const handleYearChange = (event: SelectChangeEvent) => {
    console.log('Got year event: ', event.target.value, event);
    setYear(event.target.value);
    setMonths(filterMonths(allMonths, parseInt(event.target.value, 10)));
  };
  const handleMonthChange = (event: SelectChangeEvent) => {
    console.log('Got month event: ', event.target.value, event);
    setMonth(event.target.value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              budget.malt.no
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main className={styles.main}>
        <BudgetSankey month={month} year={year} />
        <section id="year-month-select" className={styles.formsection}>
          <FormControl>
            <InputLabel id="budget-year-label">Year</InputLabel>
            <Select
              variant="filled"
              labelId="budget-year-label"
              id="budget-year-select"
              value={year}
              onChange={handleYearChange}
              className={styles.select}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={styles.formControl}>
            <InputLabel id="budget-month-label">Month</InputLabel>
            <Select
              variant="filled"
              labelId="budget-month-label"
              id="budget-month-select"
              value={month}
              onChange={handleMonthChange}
              className={styles.select}
            >
              {months.map((m) => (
                <MenuItem key={m[0]} value={m[1]}>
                  {m[0]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </section>
      </main>
      <footer className={styles.footer}>budget sankey - initial version - v{packageInfo.version}</footer>
    </div>
  );
};

const fetchYears = async (): Promise<number[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/budget/years`;
  console.log('fetching years:', url);
  const res = await fetch(url);
  const data = await res.json();

  return data.years;
};

export async function getStaticProps(): Promise<{}> {
  const years = await fetchYears();
  console.log('years', years);
  return {
    props: {
      years,
    },
  };
}

export default BudgetHome;
