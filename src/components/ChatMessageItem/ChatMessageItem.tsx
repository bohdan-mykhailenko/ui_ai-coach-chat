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
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '700',
          color: theme.palette.black.main,
          lineHeight: '150%',
        }}
      >
        {message.content}
      </Typography>
      <Icon
        sx={{
          zIndex: '100',
          position: 'absolute',
          left: isUserMessage ? 'auto' : '-10px',
          right: isUserMessage ? '-10px' : 'auto',
          transform: isUserMessage ? 'rotate(115deg)' : 'rotate(-15deg)',
        }}
      >
        <MessageTailIcon color={selectedColor} isUserMessage={isUserMessage} />
      </Icon>
    </Grid>
  );
};
