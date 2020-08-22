import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';

import AppError from '../errors/AppError';

import Acs from '../models/Acs';

interface Request {
  acs_id: string;
  name: string;
  email: string;
  password?: string;
  newPassword?: string;
}

class CreateAcsService {
  public async execute({
    acs_id,
    name,
    email,
    password,
    newPassword,
  }: Request): Promise<Acs> {
    const acsRepository = getRepository(Acs);
    const acs = await acsRepository.findOneOrFail(acs_id);

    const acsExists = await acsRepository.findOne({
      where: { email },
    });

    if (acsExists && acsExists.email !== email) {
      throw new AppError('Email already used.');
    }

    if (password && !(await compare(password, acs.password))) {
      throw new AppError("Password doesn't match");
    }

    if (password && newPassword) {
      acs.password = await hash(newPassword, 8);
    }

    acs.name = name;
    acs.email = email;

    await acsRepository.save(acs);

    return acs;
  }
}

export default CreateAcsService;
