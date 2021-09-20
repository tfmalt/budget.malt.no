import type { NextPage } from 'next';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import packageInfo from '../package.json';
import styles from '../styles/Home.module.scss';
import BudgetSankey from '../lib/components/BudgetSankey/BudgetSankey';
import { useAuth0 } from '@auth0/auth0-react';
import type { BudgetHomeProps } from '../lib/Budget.types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

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

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const [year, setYear] = React.useState(now.getFullYear().toString());
  const [month, setMonth] = React.useState(now.getMonth().toString());
  const [months, setMonths] = React.useState(filterMonths(allMonths, parseInt(year, 10)));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleYearChange = (event: SelectChangeEvent) => {
    console.log('Got year event: ', event.target.value, event);
    setYear(event.target.value);
    setMonths(filterMonths(allMonths, parseInt(event.target.value, 10)));
  };

  const handleMonthChange = (event: SelectChangeEvent) => {
    console.log('Got month event: ', event.target.value, event);
    console.log('inside sankey user:', user);
    setMonth(event.target.value);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout({ returnTo: process.env.NEXT_PUBLIC_REDIRECT_URL, client_id: process.env.NEXT_PUBLIC_CLIENT_ID });
  };

  const getSankey = (): JSX.Element | null => {
    let sankey = null;
    if (isAuthenticated) {
      sankey = <BudgetSankey month={month} year={year} />;
    }
    return sankey;
  };

  const getLoginButton = (): JSX.Element | false => {
    return (
      <Button color="inherit" onClick={() => (isAuthenticated ? handleLogout() : loginWithRedirect())}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </Button>
    );
  };

  return (
    <React.Fragment>
      <AppBar position="static" elevation={1}>
        <Toolbar variant="regular">
          <IconButton
            edge="start"
            className={styles.menuButton}
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            budget.malt.no
          </Typography>
          {getLoginButton()}
          <div>
            <Avatar
              onClick={handleMenu}
              color="inherit"
              src={typeof user === 'undefined' ? '' : user.picture}
              alt={typeof user === 'undefined' ? 'Unauthorized user' : user.name}
              sx={{ border: '3.5px solid white' }}
            ></Avatar>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Grid
        sx={{
          padding: 2,
        }}
        container
        spacing={3}
        direction="column"
      >
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 0,
              width: 'auto',
              minHeight: '320px',
            }}
            elevation={1}
          >
            {getSankey()}
          </Paper>
        </Grid>
        <Grid item xs>
          <Grid container spacing={2} direction="row" justifyContent="flex-start">
            <Grid item xs sx={{ maxWidth: '288px', minWidth: '240px' }}>
              <FormControl variant="standard" sx={{ width: '100%' }}>
                <InputLabel id="budget-year-label">Year</InputLabel>
                <Select labelId="budget-year-label" id="budget-year-select" value={year} onChange={handleYearChange}>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs sx={{ maxWidth: '288px', minWidth: '240px' }}>
              <FormControl variant="standard" sx={{ width: '100%' }}>
                <InputLabel id="budget-month-label">Month</InputLabel>
                <Select
                  labelId="budget-month-label"
                  id="budget-month-select"
                  value={month}
                  onChange={handleMonthChange}
                >
                  {months.map((m) => (
                    <MenuItem key={m[0]} value={m[1]}>
                      {m[0]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <footer className={styles.footer}>budget sankey - initial version - v{packageInfo.version}</footer>
    </React.Fragment>
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
