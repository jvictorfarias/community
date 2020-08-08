import path from 'path';
import fs from 'fs';

import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import AppError from '../errors/AppError';

import Acs from '../models/Acs';

interface Request {
  acs_id: string;
  avatarFilename: string;
}

class UpdateAcsAvatarService {
  public async execute({ acs_id, avatarFilename }: Request): Promise<Acs> {
    const acsRepository = getRepository(Acs);

    const acs = await acsRepository.findOne(acs_id);

    if (!acs) {
      throw new AppError('Only authenticated acs can change avatar', 401);
    }

    if (acs.avatar) {
      const acsAvatarFilePath = path.join(uploadConfig.directory, acs.avatar);
      const acsAvatarFileExists = await fs.promises.stat(acsAvatarFilePath);

      if (acsAvatarFileExists) {
        await fs.promises.unlink(acsAvatarFilePath);
      }
    }

    acs.avatar = avatarFilename;

    await acsRepository.save(acs);

    return acs;
  }
}

export default UpdateAcsAvatarService;
