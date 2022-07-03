import * as React from 'react';
import {
  AppBar,
  Avatar,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';
import styles from '../../../styles/Home.module.scss';
import { useAuth0 } from '@auth0/auth0-react';

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

export const BudgetAppBar = () => {
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <React.Fragment>
      <AppBar position="static" elevation={1}>
        <Container maxWidth="lg">
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
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
