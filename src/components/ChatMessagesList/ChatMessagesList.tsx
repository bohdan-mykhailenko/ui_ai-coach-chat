import React from 'react';
import { Message } from '../../types/Message';
import { ChatMessageitem } from '../ChatMessageItem';
import { List, ListItem } from '@mui/material';

interface ChatMessageitemsListProps {
  messages: Message[];
}

const ChatMessageitemsList: React.FC<ChatMessageitemsListProps> = ({
  messages,
}) => {
  return (
    <List>
      {messages.map((message) => (
        <ListItem
          key={message.content}
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

export default ChatMessageitemsList;
