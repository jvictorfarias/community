import { Router } from 'express';

import FamiliesController from '../controllers/FamiliesController';

import ensureAuthentication from '../middlewares/EnsureAuthentication';

const familiesRouter = Router();

familiesRouter.post('/', ensureAuthentication, FamiliesController.create);
familiesRouter.get('/', ensureAuthentication, FamiliesController.index);
familiesRouter.get('/:id', ensureAuthentication, FamiliesController.show);

export default familiesRouter;
