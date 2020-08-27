import { Request, Response } from 'express';
import CreateIndividualService from '../services/CreateIndividualService';
import ListIndividualService from '../services/ListIndividualService';

class IndividualsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { body: args } = request;

    const createIndividual = new CreateIndividualService();

    const individual = await createIndividual.execute({ ...args });

    return response.status(200).json(individual);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listIndividual = new ListIndividualService();

    const individual = await listIndividual.execute({ id });

    return response.status(200).json(individual);
  }
}

export default new IndividualsController();
