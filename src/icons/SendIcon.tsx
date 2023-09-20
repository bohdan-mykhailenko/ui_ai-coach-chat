import { useTheme } from '@mui/material';
import React from 'react';

export const SendIcon: React.FC = () => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
      <path
        d="M29.3332 2.66675L14.6665 17.3334"
        stroke={theme.palette.black.main}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3332 2.66675L19.9998 29.3334L14.6665 17.3334L2.6665 12.0001L29.3332 2.66675Z"
        stroke={theme.palette.black.main}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
