import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import packageInfo from '../package.json';
import styles from '../styles/Home.module.scss';
import BudgetSankey from '../lib/components/BudgetSankey/BudgetSankey';

const Home: NextPage = () => {
  const now = new Date();

  const [year, setYear] = React.useState(now.getFullYear());
  const [month, setMonth] = React.useState(now.getMonth());

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

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log('Got year event: ', event.target.value, event);
    setYear(event.target.value as number);
  };
  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log('Got month event: ', event.target.value, event);
    setMonth(event.target.value as number);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>SD60 - Money Streams</title>
        <meta name="description" content="Visualize money spent - and learn next.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
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
        <section id="year-month-select" className={styles.formsection}>
          <FormControl className={styles.formControl}>
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
        <BudgetSankey month={month} year={year} />
      </main>
      <footer className={styles.footer}>budget sankey - initial version - v{packageInfo.version}</footer>
    </div>
  );
};

export default Home;
