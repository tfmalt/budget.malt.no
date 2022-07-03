import type { NextPage } from 'next';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import packageInfo from '../package.json';
import { BudgetSankey } from '../lib/components/BudgetSankey';
import { BudgetAppBar } from '../lib/components/BudgetAppBar';
import { YearMonthSelector } from '../lib/components/YearMonthSelector';
import { useAuth0 } from '@auth0/auth0-react';
import type { BudgetHomeProps } from '../lib/Budget.types';
import { Box } from '@mui/material';
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
  });

  const handleYearChange = (y: string) => setYear(y);
  const handleMonthChange = (m: string) => setMonth(m);

  return (
    <React.Fragment>
      <BudgetAppBar></BudgetAppBar>
      <Grid container spacing={3} direction="column" maxWidth="lg">
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
            <Typography variant="caption">budget sankey - v{packageInfo.version}</Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BudgetHome;
