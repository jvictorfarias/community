import { getRepository } from 'typeorm';

import Family from '../models/Family';

interface Request {
  acs_id: string;
}

class ListFamiliesService {
  public async execute({ acs_id }: Request): Promise<Family[]> {
    const acsRepository = getRepository(Family);

    const families = await acsRepository.find({
      where: { acs_id },
    });

    return families;
  }
}

export default ListFamiliesService;
