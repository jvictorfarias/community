import { Request, Response } from 'express';
import CreateFamilyService from '../services/CreateFamilyService';
import ListFamiliesService from '../services/ListFamiliesService';

class FamiliesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      acs_id,
      city,
      district,
      number,
      phone,
      state,
      street,
      zip,
    } = request.body;

    const createFamily = new CreateFamilyService();

    const family = await createFamily.execute({
      name,
      acs_id,
      city,
      district,
      number,
      phone,
      state,
      street,
      zip,
    });

    return response.status(200).json(family);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id: acs_id } = request.acs;

    const listFamilies = new ListFamiliesService();

    const families = await listFamilies.execute({ acs_id });

    return response.status(200).json(families);
  }
}

export default new FamiliesController();
