import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Grid,
  Icon,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeartHandShakeIcon from '../../icons/HeartHandShakeIcon';

export const Sidebar: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (isSmallScreen && !isSidebarOpen) {
    // Render the sidebar toggle button for small screens
    return (
      <IconButton onClick={handleOpenSidebar}>
        <MenuIcon />
      </IconButton>
    );
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={isSidebarOpen && isSmallScreen}
      onClose={handleToggleSidebar}
      sx={{
        '& .MuiPaper-root': {
          padding: '55px 45px',

          height: '100vh',
          position: 'relative',

          display: 'flex',
          alignItems: 'center',

          backgroundColor: theme.palette.blue.main,
          border: 'none',

          '@media (max-width: 600px)': {
            padding: '50px 10px',
            width: '100vw',
          },

          '@media (max-width: 450px)': {
            padding: '20px 5px',
          },
        },
      }}
    >
      <IconButton
        onClick={handleCloseSidebar}
        sx={{
          position: 'absolute',
          left: '0',
          top: 0,
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        sx={{
          color: theme.palette.black.main,
        }}
        fontWeight="bold"
        variant="h1"
        marginBottom={'70px'}
      >
        Agile
      </Typography>
      <Link to="https://openai.com/">
        <Grid
          container
          alignItems="center"
          sx={{
            '@media (max-width: 450px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Icon
            sx={{
              marginRight: '12px',
              width: '25px',
              height: '25px',

              '@media (max-width: 600px)': {
                marginRight: '6px',
                width: '20px',
              },

              '@media (max-width: 450px)': {
                marginBottom: '6px',
                width: '18px',
              },
            }}
          >
            <HeartHandShakeIcon />
          </Icon>

          <Typography
            sx={{
              color: theme.palette.black.main,
            }}
            fontWeight="bold"
            variant="h4"
          >
            AI Agile Coach
          </Typography>
        </Grid>
      </Link>
    </Drawer>
  );
};
