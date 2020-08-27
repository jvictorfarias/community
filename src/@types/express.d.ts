import { Server } from 'socket.io';

declare namespace Express {
  export interface Request {
    acs: {
      id: string;
    };
    io: Server;
    connectedUsers: Record<string, unknown>;
  }
}
