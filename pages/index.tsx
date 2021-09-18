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

const Home: NextPage = () => {
  const now = new Date();

  const [year, setYear] = React.useState(now.getFullYear().toString());
  const [month, setMonth] = React.useState(now.getMonth().toString());

  const years = [2018, 2019, 2020, 2021];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleYearChange = (event: SelectChangeEvent) => {
    console.log('Got year event: ', event.target.value, event);
    setYear(event.target.value);
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
              {months.map((m, i) => (
                <MenuItem key={m} value={i}>
                  {m}
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

export default Home;
