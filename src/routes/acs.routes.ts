import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import CreateAcsService from '../services/CreateAcsService';
import UpdateAcsAvatarService from '../services/UpdateAcsAvatarService';

import ensureAuthentication from '../middlewares/EnsureAuthentication';

const acsRouter = Router();
const upload = multer(uploadConfig);

acsRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createAcs = new CreateAcsService();

  const acs = await createAcs.execute({ name, email, password });

  delete acs.password;

  return response.status(200).json(acs);
});

acsRouter.patch(
  '/avatar',
  ensureAuthentication,
  upload.single('avatar'),
  async (request, response) => {
    const updateAcsAvatar = new UpdateAcsAvatarService();

    const acs = await updateAcsAvatar.execute({
      acs_id: request.acs.id,
      avatarFilename: request.file.filename,
    });

    delete acs.password;

    return response.status(200).json(acs);
  },
);

export default acsRouter;
