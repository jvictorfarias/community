import { Router } from 'express';

import StatisticsController from '../controllers/StatisticsController';
import ensureAuthentication from '../middlewares/EnsureAuthentication';

const statisticsRouter = Router();

statisticsRouter.get('/', ensureAuthentication, StatisticsController.show);

export default statisticsRouter;
