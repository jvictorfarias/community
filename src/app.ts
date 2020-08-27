import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import express, { Request, Response, NextFunction, Express } from 'express';
import morgan from 'morgan';
import io, { Server as ioServer } from 'socket.io';
import http, { Server } from 'http';
import routes from './routes';

import AppError from './errors/AppError';
import uploadConfig from './config/upload';

import './database';

export default class App {
  public app: Express;

  public server: Server;

  public io: ioServer;

  public connectedUsers: Record<string, unknown>;

  constructor() {
    this.app = express();
    this.server = new http.Server(this.app);
    this.socket();
    this.middlewares();
    this.routes();
    this.errorHandlers();
  }

  private routes(): void {
    this.app.use(routes);
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use('/files', express.static(uploadConfig.directory));
    this.app.use(morgan('tiny'));
    this.app.use((request: Request, _: Response, next: NextFunction) => {
      request.io = this.io;
      request.connectedUsers = this.connectedUsers;
      next();
    });
  }

  private socket(): void {
    this.io = io(this.server);
    this.io.on('connection', socket => {
      const { acs_id } = socket.handshake.query;
      this.connectedUsers[acs_id] = socket.id;

      socket.on('disconnect', () => {
        delete this.connectedUsers[acs_id];
      });
    });
  }

  private errorHandlers(): void {
    this.app.use(
      (error: Error, request: Request, response: Response, _: NextFunction) => {
        console.log(error);
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: 'error',
            error: error.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal Server Error',
        });
      },
    );
  }
}
