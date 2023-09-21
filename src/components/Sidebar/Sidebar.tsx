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

          [theme.breakpoints.down('md')]: {
            padding: '50px 20px',
          },

          [theme.breakpoints.down('sm')]: {
            padding: '50px 15px',
          },

          [theme.breakpoints.down('xs')]: {
            padding: '100px 5px',
            width: '100vw',
          },
        },
      }}
    >
      {isSmallScreen && (
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
      )}
      <Typography
        variant="h1"
        marginBottom={'70px'}
        sx={{
          color: theme.palette.black.main,
          [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
          },

          [theme.breakpoints.down('xs')]: {
            fontSize: '27px',
          },
        }}
      >
        Agile
      </Typography>
      <Link to="#">
        <Grid
          container
          alignItems="center"
          sx={{
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
            },
          }}
        >
          <Icon
            sx={{
              marginRight: '12px',
              width: '25px',
              height: '25px',

              [theme.breakpoints.down('sm')]: {
                marginRight: '6px',
                width: '20px',
              },

              [theme.breakpoints.down('xs')]: {
                marginBottom: '6px',
                width: '25px',
              },
            }}
          >
            <HeartHandShakeIcon />
          </Icon>

          <Typography
            variant="h4"
            sx={{
              color: theme.palette.black.main,

              [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
              },

              [theme.breakpoints.down('xs')]: {
                fontSize: '20px',
              },
            }}
          >
            AI Agile Coach
          </Typography>
        </Grid>
      </Link>
    </Drawer>
  );
};
