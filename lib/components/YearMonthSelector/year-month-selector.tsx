import { Grid, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Divider } from '@mui/material';
import * as React from 'react';
import type { YearMonthSelectorProps } from '../../Budget.types';

export const YearMonthSelector: React.VFC<YearMonthSelectorProps> = ({ onYearChange, onMonthChange, years }) => {
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
  const [months, setMonths] = React.useState(filterMonths(allMonths, parseInt(year, 10)));
  const [month, setMonth] = React.useState(now.getMonth().toString());

  const handleYearChange = (e: SelectChangeEvent) => {
    setYear(e.target.value);
    setMonths(filterMonths(allMonths, parseInt(e.target.value)));
    typeof onYearChange === 'function' && onYearChange(e.target.value);
  };

  const handleMonthChange = (e: SelectChangeEvent) => {
    console.log('month change:', e.target.value);
    setMonth(e.target.value);
    typeof onMonthChange === 'function' && onMonthChange(e.target.value);
  };

  //        <Grid item xs sx={{ maxWidth: '288px', minWidth: '240px' }}></Grid>
  return (
    <Grid container paddingTop={2} paddingBottom={2} spacing={3} direction="row" justifyContent="flex-start">
      <Grid item xs={6} sm={3} md={2} sx={{ minWidth: '288px' }}>
        <FormControl variant="filled" sx={{ width: '100%' }}>
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
      <Grid item xs={6} sm={3} md={2} sx={{ minWidth: '288px', maxWidth: '343px' }}>
        <FormControl variant="filled" sx={{ width: '100%' }}>
          <InputLabel id="budget-month-label">Month</InputLabel>
          <Select labelId="budget-month-label" id="budget-month-select" value={month} onChange={handleMonthChange}>
            <MenuItem key={'All Year'} value={99}>
              All Year
            </MenuItem>
            <Divider />
            {months.map((m) => (
              <MenuItem key={m[0]} value={m[1]}>
                {m[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
