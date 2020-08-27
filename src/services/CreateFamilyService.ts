import { getRepository } from 'typeorm';

import Family from '../models/Family';
import Address from '../models/Address';
import Logger from '../helpers/Logger';

interface Request {
  name: string;
  acs_id: string;
  street: string;
  city: string;
  district: string;
  state: string;
  zip: string;
  number: number;
  phone: string;
}

class CreateAcsService {
  public async execute({
    name,
    acs_id,
    city,
    district,
    number,
    phone,
    state,
    street,
    zip,
  }: Request): Promise<Family> {
    const familyRepository = getRepository(Family);
    const addressRepository = getRepository(Address);

    const family = familyRepository.create({
      name,
      acs_id,
    });

    const address = addressRepository.create({
      city,
      district,
      number,
      phone,
      state,
      street,
      zip,
      family,
    });

    await addressRepository.save(address);

    Logger.create(acs_id, `Cadastrou a família de nome ${name}`);

    return family;
  }
}

export default CreateAcsService;
