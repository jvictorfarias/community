import { getRepository } from 'typeorm';

import Family from '../models/Family';

interface Request {
  id: string;
}

class ListFamilyService {
  public async execute({ id }: Request): Promise<Family | undefined> {
    const familyRepository = getRepository(Family);

    const families = await familyRepository.findOne({
      where: { id },
      relations: ['address', 'acs'],
    });

    return families;
  }
}

export default ListFamilyService;
