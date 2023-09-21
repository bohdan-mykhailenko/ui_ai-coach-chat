import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const messagesSelector = (state: RootState) => state.messages.messages;

export const selectMessages = createSelector(
  [messagesSelector],
  (messages) => messages,
);
