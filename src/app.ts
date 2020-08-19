import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import express, { Request, Response, NextFunction, Express } from 'express';
import morgan from 'morgan';
import routes from './routes';

import AppError from './errors/AppError';
import uploadConfig from './config/upload';

import './database';

export default class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private routes(): void {
    this.app.use(routes);
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use('/files', express.static(uploadConfig.directory));
    this.app.use(morgan('tiny'));
    this.app.use(
      (error: Error, request: Request, response: Response, _: NextFunction) => {
        if (error instanceof AppError) {
          console.log(error);
          return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal Server Error',
          error: error.message,
        });
      },
    );
  }
}
