import { Message } from '../types/Message';

export const getLastMessageId = (messages: Message[]) => {
  return messages[messages.length - 1]?.id || 0;
};
