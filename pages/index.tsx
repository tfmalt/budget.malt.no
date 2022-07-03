import type { NextPage } from 'next';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import packageInfo from '../package.json';
import { BudgetSankey } from '../lib/components/BudgetSankey/budget-sankey';
import { BudgetAppBar } from '../lib/components/BudgetAppBar';
import { YearMonthSelector } from '../lib/components/YearMonthSelector/year-month-selector';
import { useAuth0 } from '@auth0/auth0-react';
import type { BudgetHomeProps } from '../lib/Budget.types';
import { Box, Container } from '@mui/material';
import { theme } from '../styles/theme';

const BudgetHome: NextPage = () => {
  const now = new Date();
  const { isAuthenticated } = useAuth0();
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

  return (
    <>
      <BudgetAppBar></BudgetAppBar>
      <Grid container direction={'row'} position={'absolute'} height={`calc(100vh - 64px)`} maxHeight={`865px`}>
        <Grid item xs={12} flexGrow={20} flexBasis={'90%'}>
          <Container maxWidth="xl">
            <Box
              sx={{
                paddingTop: 2,
                minHeight: '320px',
              }}
            >
              {isAuthenticated && <BudgetSankey month={month} year={year} />}
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} flexShrink={2} sx={{ maxHeight: '96px' }}>
          <Container maxWidth="xl">
            <YearMonthSelector years={years} onYearChange={handleYearChange} onMonthChange={handleMonthChange} />
          </Container>
        </Grid>
        <Grid item xs={12} flexShrink={3} sx={{ maxHeight: '56px' }}>
          <Container
            maxWidth="xl"
            sx={{ backgroundColor: theme.palette.grey[200], borderTop: `1px solid ${theme.palette.grey[300]}` }}
          >
            <Box sx={{ padding: '16px 0px' }}>
              <Typography variant="caption">budget sankey - v{packageInfo.version}</Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default BudgetHome;
