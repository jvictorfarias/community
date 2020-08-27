import { Request, Response } from 'express';
import CreateFamilyService from '../services/CreateFamilyService';
import ListFamiliesService from '../services/ListFamiliesService';
import ListFamilyService from '../services/ListFamilyService';
import SearchFamiliesService from '../services/SearchFamiliesService';
import DeleteFamilyService from '../services/DeleteFamilyService';
import Logger from '../helpers/Logger';

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

    Logger.create(request.acs.id, `Listou os indivíduos`);

    return response.status(200).json(families);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listFamily = new ListFamilyService();

    const family = await listFamily.execute({ id });

    Logger.create(request.acs.id, `Procurou pelo indivíduo  ${id}`);

    return response.status(200).json(family);
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const searchFamilies = new SearchFamiliesService();

    const families = await searchFamilies.execute({
      name,
    });
    Logger.create(request.acs.id, `Procurou pelo termo ${name}`);

    return response.status(200).json(families);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteFamily = new DeleteFamilyService();

    await deleteFamily.execute({
      family_id: id,
    });

    Logger.create(request.acs.id, `Apagou a família com ID  ${id}`);

    return response.status(204);
  }
}

export default new FamiliesController();
