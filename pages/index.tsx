import type { NextPage } from 'next';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import packageInfo from '../package.json';
import { BudgetSankey } from '../lib/components/BudgetSankey';
import { BudgetAppBar } from '../lib/components/BudgetAppBar';
import { YearMonthSelector } from '../lib/components/YearMonthSelector';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container, getTableFooterUtilityClass, useMediaQuery } from '@mui/material';
import { theme } from '../styles/theme';

const BudgetHome: NextPage = () => {
  const now = new Date();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [year, setYear] = React.useState(now.getFullYear().toString());
  const [month, setMonth] = React.useState(now.getMonth().toString());
  const [years, setYears] = React.useState([]);

  const fetchYears = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_HOST}/budget/years`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log('years data:', data);
      return data.years;
    } catch (e) {
      console.error('Got error fetching years:', e);
      return [];
    }
  };

  React.useEffect(() => {
    fetchYears().then((y) => setYears(y));
  }, []);

  const handleYearChange = (y: string) => setYear(y);
  const handleMonthChange = (m: string) => setMonth(m);

  const isLarge = useMediaQuery('(min-width:600px)');
  const getFooter = () => {
    if (isLarge) {
      return (
        <footer
          style={{
            backgroundColor: theme.palette.grey[200],
            borderTop: `1px solid ${theme.palette.grey[300]}`,
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ padding: '16px 0px' }}>
              <Typography variant="caption">budget sankey - v{packageInfo.version}</Typography>
            </Box>
          </Container>
        </footer>
      );
    }
  };

  const getBudgetSankey = () => {
    return (
      <Grid
        container
        direction={'row'}
        spacing={0}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          height: `calc(100vh - 121px)`,
        }}
      >
        <Grid item xs={12} flexGrow={20}>
          <Container maxWidth="xl" sx={{}}>
            <Box
              sx={{
                paddingTop: 2,
                height: '100%',
              }}
            >
              <BudgetSankey
                month={month}
                year={year}
                width={`calc(100vw - 48px)`}
                height={`calc(100vh - 281px)`}
                maxWidth={`${theme.breakpoints.values.xl - 48}px`}
                maxHeight={`${theme.breakpoints.values.xl * (9 / 16)}px`}
              />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} flexShrink={1}>
          <Container maxWidth="xl">
            <YearMonthSelector years={years} onYearChange={handleYearChange} onMonthChange={handleMonthChange} />
          </Container>
        </Grid>
      </Grid>
    );
  };

  const handleLogin = () => {
    loginWithRedirect({ connection: 'google-oauth2' });
  };

  const getLoginButton = () => {
    return (
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: `calc(100vh - 121px)` }}>
        <Grid item sx={{ padding: 2 }}>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 20%, #4db6ac 80%)`,
            }}
            variant="contained"
            onClick={handleLogin}
          >
            Sign in with Google
          </Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <BudgetAppBar></BudgetAppBar>
      {isAuthenticated ? getBudgetSankey() : getLoginButton()}
      {getFooter()}
    </>
  );
};

export default BudgetHome;
