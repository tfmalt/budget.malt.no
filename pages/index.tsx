import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Chart from "react-google-charts";
import packageInfo from "../package.json";
import styles from "../styles/Home.module.scss";
import { CallReceived } from "@material-ui/icons";

const Home: NextPage = () => {
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");
  const years = [2018, 2019, 2020, 2021];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log("Got year event: ", event.target.value, event);
    setYear(event.target.value as string);
  };
  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log("Got month event: ", event.target.value, event);
    setMonth(event.target.value as string);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A test project to learn next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={styles.menuButton}
              color="inherit"
              aria-label="menu"
            >
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
        <section id="graph-area" className={styles.graph}>
          <Chart
            chartType="Sankey"
            width={"100%"}
            height={"calc(100vh - 216px"}
            loader={<div>Loading Chart</div>}
            data={[
              ["From", "To", "Weight"],
              ["A", "X", 5],
              ["A", "Y", 7],
              ["A", "Z", 6],
              ["B", "X", 2],
              ["B", "Y", 9],
              ["B", "Z", 4],
            ]}
          />
        </section>
      </main>
      <footer className={styles.footer}>
        budget sankey - initial version - v{packageInfo.version}
      </footer>
    </div>
  );
};

export default Home;
