import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChatPage } from './pages/ChatPage';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<ChatPage />}>
          <Route path="*" element={<ChatPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
