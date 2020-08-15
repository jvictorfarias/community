import { Router } from 'express';
import acsRouter from './acs.routes';
import sessionsRouter from './sessions.routes';
import familiesRouter from './families.routes';

const routes = Router();

routes.use('/acs', acsRouter);
routes.use('/session', sessionsRouter);
routes.use('/families', familiesRouter);

export default routes;
