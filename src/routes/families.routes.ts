import { Router } from 'express';

import FamiliesController from '../controllers/FamiliesController';

import ensureAuthentication from '../middlewares/EnsureAuthentication';

const familiesRouter = Router();

familiesRouter.post('/', ensureAuthentication, FamiliesController.create);
familiesRouter.get('/', ensureAuthentication, FamiliesController.index);
familiesRouter.get('/:id', ensureAuthentication, FamiliesController.show);
familiesRouter.delete('/:id', ensureAuthentication, FamiliesController.delete);
familiesRouter.get(
  '/search/:name',
  ensureAuthentication,
  FamiliesController.search,
);

export default familiesRouter;
