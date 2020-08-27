import { Router } from 'express';

import IndividualsController from '../controllers/IndividualsController';

import ensureAuthentication from '../middlewares/EnsureAuthentication';

const individualsRouter = Router();

individualsRouter.post('/', ensureAuthentication, IndividualsController.create);
individualsRouter.get('/:id', ensureAuthentication, IndividualsController.show);
individualsRouter.delete(
  '/:id',
  ensureAuthentication,
  IndividualsController.delete,
);
individualsRouter.get(
  '/search/:name',
  ensureAuthentication,
  IndividualsController.search,
);

export default individualsRouter;
