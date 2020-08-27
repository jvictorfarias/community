import { getRepository } from 'typeorm';

import Individual from '../models/Individual';

interface Request {
  name: string;
}

class SearchIndividualsService {
  public async execute({ name }: Request): Promise<Individual[]> {
    const individualRepository = getRepository(Individual);

    const individuals = await individualRepository.find({
      where: `Individual.name ILIKE '%${name}%'`,
    });

    return individuals;
  }
}

export default SearchIndividualsService;
