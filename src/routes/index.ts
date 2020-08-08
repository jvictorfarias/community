import { Router } from 'express';
import acsRouter from './acs.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/acs', acsRouter);
routes.use('/session', sessionsRouter);

export default routes;
