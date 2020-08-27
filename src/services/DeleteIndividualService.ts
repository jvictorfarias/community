import { getRepository } from 'typeorm';

import Individual from '../models/Individual';

interface Request {
  individual_id: string;
}

class DeleteIndividualService {
  public async execute({ individual_id }: Request): Promise<void> {
    const individualRepository = getRepository(Individual);

    await individualRepository.delete(individual_id);
  }
}

export default DeleteIndividualService;
