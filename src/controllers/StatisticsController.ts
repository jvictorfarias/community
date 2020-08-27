import { Request, Response } from 'express';
import StatisticsService from '../services/StatisticsService';

class StatisticsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const authenticateAcs = new StatisticsService();

    const result = await authenticateAcs.execute();

    return response.status(200).json(result);
  }
}

export default new StatisticsController();
