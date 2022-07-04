import type { NextPage } from 'next';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import packageInfo from '../package.json';
import { BudgetSankey } from '../lib/components/BudgetSankey';
import { BudgetAppBar } from '../lib/components/BudgetAppBar';
import { YearMonthSelector } from '../lib/components/YearMonthSelector';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, getTableFooterUtilityClass, useMediaQuery } from '@mui/material';
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

  const isLarge = useMediaQuery('(min-width:600px)');
  const getFooter = () => {
    if (isLarge) {
      return (
        <Grid
          item
          xs={12}
          flexGrow={4}
          flexShrink={0}
          sx={{
            backgroundColor: theme.palette.grey[200],
            borderTop: `1px solid ${theme.palette.grey[300]}`,
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ padding: '16px 0px' }}>
              <Typography variant="caption">budget sankey - v{packageInfo.version}</Typography>
            </Box>
          </Container>
        </Grid>
      );
    }
  };

  return (
    <>
      <BudgetAppBar></BudgetAppBar>
      <Grid
        container
        direction={'row'}
        spacing={0}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        position={'absolute'}
        height={`calc(100vh - 64px)`}
      >
        <Grid item xs={12} flexGrow={20} flexBasis={'90%'}>
          <Container maxWidth="xl" sx={{}}>
            <Box
              sx={{
                paddingTop: 2,
                height: '100%',
              }}
            >
              {isAuthenticated && <BudgetSankey month={month} year={year} />}
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} flexShrink={0}>
          <Container maxWidth="xl">
            <YearMonthSelector years={years} onYearChange={handleYearChange} onMonthChange={handleMonthChange} />
          </Container>
        </Grid>
        {getFooter()}
      </Grid>
    </>
  );
};

export default BudgetHome;
