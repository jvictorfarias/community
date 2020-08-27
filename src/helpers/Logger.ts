import { uuid } from 'uuidv4';
import Log from '../schemas/Log';

class Logger {
  public async create(user: string, action: string): Promise<void> {
    await Log.create({ _id: uuid(), user, action });
  }
}

export default new Logger();
