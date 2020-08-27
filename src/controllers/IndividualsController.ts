import { Request, Response } from 'express';
import CreateIndividualService from '../services/CreateIndividualService';
import ListIndividualService from '../services/ListIndividualService';
import SearchIndividualsService from '../services/SearchIndividualsService';
import DeleteIndividualService from '../services/DeleteIndividualService';

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

  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const searchIndividuals = new SearchIndividualsService();

    const individuals = await searchIndividuals.execute({
      name,
    });

    return response.status(200).json(individuals);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteIndividual = new DeleteIndividualService();

    await deleteIndividual.execute({
      individual_id: id,
    });

    return response.status(204);
  }
}

export default new IndividualsController();
