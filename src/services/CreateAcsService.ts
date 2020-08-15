import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import Acs from '../models/Acs';

interface Request {
  name: string;
  cns: string;
  cbo: string;
  email: string;
  password: string;
}

class CreateAcsService {
  public async execute({
    name,
    email,
    cns,
    cbo,
    password,
  }: Request): Promise<Acs> {
    const acsRepository = getRepository(Acs);

    if (await acsRepository.findOne({ where: { email } })) {
      throw new AppError('Email address already used.');
    }

    const hash_password = await hash(password, 8);

    const acs = acsRepository.create({
      name,
      email,
      cns,
      cbo,
      password: hash_password,
    });

    await acsRepository.save(acs);

    return acs;
  }
}

export default CreateAcsService;
