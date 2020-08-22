import { Router } from 'express';
import multer from 'multer';

import AcsController from '../controllers/AcsController';
import AcsAvatarController from '../controllers/AcsAvatarController';

import uploadConfig from '../config/upload';
import ensureAuthentication from '../middlewares/EnsureAuthentication';

const acsRouter = Router();
const upload = multer(uploadConfig);

acsRouter.post('/', AcsController.create);
acsRouter.put('/', ensureAuthentication, AcsController.update);
acsRouter.patch(
  '/avatar',
  ensureAuthentication,
  upload.single('avatar'),
  AcsAvatarController.update,
);

export default acsRouter;
