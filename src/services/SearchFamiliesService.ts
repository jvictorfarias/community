import { getRepository } from 'typeorm';

import Family from '../models/Family';

interface Request {
  name: string;
}

class SearchFamiliesService {
  public async execute({ name }: Request): Promise<Family[]> {
    const individualRepository = getRepository(Family);

    const families = await individualRepository.find({
      where: `Family.name ILIKE '%${name}%'`,
    });

    return families;
  }
}

export default SearchFamiliesService;
