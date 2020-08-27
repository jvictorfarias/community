import { Router } from 'express';
import acsRouter from './acs.routes';
import sessionsRouter from './sessions.routes';
import familiesRouter from './families.routes';
import individualsRouter from './individual.routes';
import statisticsRouter from './statistics.routes';

const routes = Router();

routes.use('/acs', acsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/families', familiesRouter);
routes.use('/individuals', individualsRouter);
routes.use('/statistics', statisticsRouter);

export default routes;
