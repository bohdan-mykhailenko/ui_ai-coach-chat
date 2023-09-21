import React from 'react';
import { Message } from '../../types/Message';
import { ChatMessageitem } from '../ChatMessageItem';
import { List, ListItem } from '@mui/material';

interface ChatMessagesListProps {
  messages: Message[];
}

export const ChatMessagesList: React.FC<ChatMessagesListProps> = ({
  messages,
}) => {
  return (
    <List>
      {messages.map((message) => (
        <ListItem
          key={message.id}
          sx={{
            display: 'flex',
            justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
          }}
        >
          <ChatMessageitem message={message} />
        </ListItem>
      ))}
    </List>
  );
};
