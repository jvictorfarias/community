import { Router } from 'express';

import FamiliesController from '../controllers/FamiliesController';

import EnsureAuthentication from '../middlewares/EnsureAuthentication';

const familiesRouter = Router();

familiesRouter.post('/', EnsureAuthentication, FamiliesController.create);
familiesRouter.get('/', EnsureAuthentication, FamiliesController.index);

export default familiesRouter;
