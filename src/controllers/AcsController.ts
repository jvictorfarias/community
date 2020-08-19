import { Request, Response } from 'express';
import CreateAcsService from '../services/CreateAcsService';

class AcsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, cns, cbo, password } = request.body;

    const createAcs = new CreateAcsService();
    try {
      const acs = await createAcs.execute({ name, email, cns, cbo, password });

      delete acs.password;

      return response.status(200).json(acs);
    } catch {
      return response.status(400).json({ error: 'error' });
    }
  }
}

export default new AcsController();
