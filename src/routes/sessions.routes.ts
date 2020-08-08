import { Router } from 'express';
import AuthenticateAcsService from '../services/AuthenticateAcsService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateAcs = new AuthenticateAcsService();

  const { acs, token } = await authenticateAcs.execute({ email, password });

  delete acs.password;

  return response.status(200).json({ acs, token });
});

export default sessionsRouter;
