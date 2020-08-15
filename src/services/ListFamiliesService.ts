import { getRepository } from 'typeorm';

import Family from '../models/Family';

interface Request {
  acs_id: string;
}

class CreateAcsService {
  public async execute({ acs_id }: Request): Promise<Family[]> {
    const familyRepository = getRepository(Family);

    const family = await familyRepository.find({
      where: { acs_id },
      relations: ['address', 'acs'],
    });

    return family;
  }
}

export default CreateAcsService;
