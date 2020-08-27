import { Request, Response } from 'express';
import StatisticsService from '../services/StatisticsService';
import Logger from '../helpers/Logger';

class StatisticsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const authenticateAcs = new StatisticsService();

    const result = await authenticateAcs.execute();

    Logger.create(request.acs.id, `Listou as estatísticas`);

    return response.status(200).json(result);
  }
}

export default new StatisticsController();
