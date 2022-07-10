import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container } from '@mui/material';
import * as React from 'react';
import { BudgetSankey } from '../lib/components/BudgetSankey';
import { theme } from '../styles/theme';

const SankeyPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
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

  const handleLogin = () => {
    loginWithRedirect({ connection: 'google-oauth2', redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/sankey` });
  };

  return (
    <Container disableGutters>
      <Box padding={2}>
        {isAuthenticated ? (
          <BudgetSankey
            month={month}
            year={year}
            width={`100vw`}
            maxHeight={`calc(100vh - 100px)`}
            height={`calc(100vh - 100px)`}
            update={lastUpdate}
          />
        ) : (
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 20%, #4db6ac 100%)`,
            }}
            variant="contained"
            size="large"
            onClick={handleLogin}
          >
            Sign in with Google
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default SankeyPage;
