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
import packageInfo from '../package.json';
import styles from '../styles/Home.module.scss';
import { BudgetSankey } from '../lib/components/BudgetSankey';
import { YearMonthSelector } from '../lib/components/YearMonthSelector';
import { useAuth0 } from '@auth0/auth0-react';
import type { BudgetHomeProps } from '../lib/Budget.types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Box, Divider, ListItemIcon } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { theme } from '../styles/theme';

const BudgetHome: NextPage<BudgetHomeProps> = ({ years }) => {
  const now = new Date();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [year, setYear] = React.useState(now.getFullYear().toString());
  const [month, setMonth] = React.useState(now.getMonth().toString());

  const handleYearChange = (y: string) => setYear(y);
  const handleMonthChange = (m: string) => setMonth(m);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLoginOrOut = () => {
    isAuthenticated
      ? logout({ returnTo: process.env.NEXT_PUBLIC_REDIRECT_URL, client_id: process.env.NEXT_PUBLIC_CLIENT_ID })
      : loginWithRedirect({ connection: 'google-oauth2' });
  };

  const getLoginButton = (): JSX.Element | false => {
    return (
      <Button color="inherit" onClick={handleLoginOrOut}>
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
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar
                  onClick={handleMenu}
                  color="inherit"
                  src={typeof user === 'undefined' ? '' : user.picture}
                  alt={typeof user === 'undefined' ? 'Unauthorized user' : user.name}
                  sx={{ border: '3.5px solid white' }}
                />{' '}
                {typeof user === 'undefined' ? 'Unauthorized user' : user.name}
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} direction="column">
        <Grid item xs={12} margin={2}>
          <Paper
            sx={{
              padding: 0,
              width: 'auto',
              minHeight: '320px',
            }}
            elevation={0}
          >
            {isAuthenticated && <BudgetSankey month={month} year={year} />}
          </Paper>
        </Grid>
        <Grid item xs={12} marginLeft={2}>
          <YearMonthSelector years={years} onYearChange={handleYearChange} onMonthChange={handleMonthChange} />
        </Grid>
        <Grid item xs={12} margin={0}>
          <Box padding={1} marginTop={2} sx={{ backgroundColor: theme.palette.grey[100] }}>
            <Typography variant="caption">budget sankey - initial version - v{packageInfo.version}</Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const fetchYears = async (): Promise<number[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/budget/years`;
  const res = await fetch(url);
  const data = await res.json();

  return data.years;
};

export async function getStaticProps(): Promise<{}> {
  const years = await fetchYears();
  return {
    props: {
      years,
    },
  };
}

export default BudgetHome;
