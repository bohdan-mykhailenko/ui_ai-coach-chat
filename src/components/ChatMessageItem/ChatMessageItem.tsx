import React from 'react';
import { Message } from '../../types/Message';
import { Grid, Icon, Typography, useTheme } from '@mui/material';
import { MessageTailIcon } from '../../icons/MessageTailIcon';

interface ChatMessageitemProps {
  message: Message;
}

export const ChatMessageitem: React.FC<ChatMessageitemProps> = ({
  message,
}) => {
  const theme = useTheme();
  const normalizedMessageText = message.content;
  const isUserMessage = message.role === 'user';
  const selectedColor = isUserMessage
    ? theme.palette.accent.main
    : theme.palette.blue.main;

  return (
    <Grid
      sx={{
        padding: '25px 44px',

        borderRadius: '40px',
        backgroundColor: selectedColor,
        position: 'relative',

        [theme.breakpoints.down('sm')]: {
          padding: '10px 20px',
          borderRadius: '25px',
        },

        [theme.breakpoints.down('xs')]: {
          borderRadius: '20px',
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: theme.palette.black.main,

          [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
          },
        }}
      >
        {normalizedMessageText}
      </Typography>
      <Icon
        sx={{
          position: 'absolute',
          left: isUserMessage ? 'auto' : '-10px',
          right: isUserMessage ? '-10px' : 'auto',
          transform: isUserMessage ? 'rotate(115deg)' : 'rotate(-15deg)',

          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        }}
      >
        <MessageTailIcon color={selectedColor} isUserMessage={isUserMessage} />
      </Icon>
    </Grid>
  );
};
