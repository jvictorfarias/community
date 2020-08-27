import { getRepository } from 'typeorm';

import Individual from '../models/Individual';

interface Request {
  id: string;
}

class ListIndividualService {
  public async execute({ id }: Request): Promise<Individual | undefined> {
    const individualRepository = getRepository(Individual);

    const individual = await individualRepository.findOne({
      where: { id },
      relations: ['family'],
    });

    return individual;
  }
}

export default ListIndividualService;
