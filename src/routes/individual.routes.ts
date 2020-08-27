import { Router } from 'express';

import IndividualsController from '../controllers/IndividualsController';

import ensureAuthentication from '../middlewares/EnsureAuthentication';

const individualsRouter = Router();

individualsRouter.post('/', ensureAuthentication, IndividualsController.create);
individualsRouter.get('/:id', ensureAuthentication, IndividualsController.show);

export default individualsRouter;
