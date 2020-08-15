import { Request, Response } from 'express';
import AuthenticateAcsService from '../services/AuthenticateAcsService';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateAcs = new AuthenticateAcsService();

    const { acs, token } = await authenticateAcs.execute({ email, password });

    delete acs.password;

    return response.status(200).json({ acs, token });
  }
}

export default new SessionController();
