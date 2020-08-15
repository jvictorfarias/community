import { getRepository } from 'typeorm';

import Acs from '../models/Acs';
import Family from '../models/Family';

interface Request {
  acs_id: string;
}

class ListFamiliesService {
  public async execute({ acs_id }: Request): Promise<Family[]> {
    const acsRepository = getRepository(Acs);
    try {
      const { families } = await acsRepository.findOneOrFail({
        where: { acs_id },
      });

      return families;
    } catch {
      return [] as Family[];
    }
  }
}

export default ListFamiliesService;
