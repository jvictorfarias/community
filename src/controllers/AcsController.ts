import { Request, Response } from 'express';
import CreateAcsService from '../services/CreateAcsService';
import UpdateAcsService from '../services/UpdateAcsService';

class AcsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, cns, cbo, password } = request.body;

    const createAcs = new CreateAcsService();

    const acs = await createAcs.execute({ name, email, cns, cbo, password });

    delete acs.password;

    return response.status(200).json(acs);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateAcs = new UpdateAcsService();
    const { id } = request.acs;

    const acs = await updateAcs.execute({ acs_id: id, ...request.body });

    return response.status(200).json(acs);
  }
}

export default new AcsController();
