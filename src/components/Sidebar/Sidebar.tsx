import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Grid, Icon, Typography, useTheme } from '@mui/material';
import HeartHandShakeIcon from '../../icons/HeartHandShakeIcon';

export const Sidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiPaper-root': {
          padding: '55px 45px',

          height: '100vh',

          display: 'flex',
          alignItems: 'center',

          backgroundColor: theme.palette.blue.main,

          border: 'none',
        },
      }}
    >
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
        <Grid container>
          <Icon
            sx={{
              marginRight: '12px',
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
