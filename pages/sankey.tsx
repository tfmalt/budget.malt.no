import { Box, Container } from '@mui/material';
import * as React from 'react';
import { BudgetSankey } from '../lib/components/BudgetSankey';

const SankeyPage = () => {
  const now = new Date();
  const [year, setYear] = React.useState(now.getFullYear().toString());
  const [month, setMonth] = React.useState(now.getMonth().toString());
  const [lastUpdate, setLastUpdated] = React.useState(now.toJSON());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(() => new Date().toJSON());
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container disableGutters>
      <Box padding={2}>
        <BudgetSankey
          month={month}
          year={year}
          width={`100vw`}
          maxHeight={`calc(100vh - 100px)`}
          height={`calc(100vh - 100px)`}
          update={lastUpdate}
        />
      </Box>
    </Container>
  );
};

export default SankeyPage;
