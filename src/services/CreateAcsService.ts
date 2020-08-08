import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import Acs from '../models/Acs';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateAcsService {
  public async execute({ name, email, password }: Request): Promise<Acs> {
    const acsRepository = getRepository(Acs);

    if (await acsRepository.findOne({ where: { email } })) {
      throw new AppError('Email address already used.');
    }

    const hash_password = await hash(password, 8);

    const acs = acsRepository.create({
      name,
      email,
      password: hash_password,
    });

    await acsRepository.save(acs);

    return acs;
  }
}

export default CreateAcsService;
