import { io, Socket } from 'socket.io-client';
import { Message } from '../types/Message';
import { API_URL } from '../consts/api';

class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(API_URL);
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });
  }

  sendMessageToOpenAI(message: Message) {
    this.socket.emit('messageToOpenAI', message);
  }

  onOpenAIResponse(callback: (response: Message) => void) {
    this.socket.on('responseFromOpenAI', (data: Message) => {
      callback(data);
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export const socketService = Object.freeze(new SocketService());
