import { Request, Response } from 'express';
import UpdateAcsAvatarService from '../services/UpdateAcsAvatarService';

class AcsAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAcsAvatar = new UpdateAcsAvatarService();

    const acs = await updateAcsAvatar.execute({
      acs_id: request.acs.id,
      avatarFilename: request.file.filename,
    });

    delete acs.password;

    return response.status(200).json(acs);
  }
}

export default new AcsAvatarController();
