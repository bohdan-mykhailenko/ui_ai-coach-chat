import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Message } from '../types/Message';

interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const newMessage = action.payload;

      const isMessageExist = state.messages.some(
        (message) => message.id === newMessage.id,
      );

      if (!isMessageExist) {
        state.messages = [...state.messages, newMessage];
      }
    },
  },
});

export const { setMessages, addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
