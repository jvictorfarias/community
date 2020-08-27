import { getRepository } from 'typeorm';

import Family from '../models/Family';

interface Request {
  family_id: string;
}

class CreateAcsService {
  public async execute({ family_id }: Request): Promise<void> {
    const familyRepository = getRepository(Family);

    await familyRepository.delete(family_id);
  }
}

export default CreateAcsService;
