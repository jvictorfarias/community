import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import Acs from '../models/Acs';

interface Request {
  email: string;
  password: string;
}

interface Response {
  acs: Acs;
  token: string;
}

class AuthenticateAcsService {
  public async execute({ email, password }: Request): Promise<Response> {
    const acsRepository = getRepository(Acs);

    const acs = await acsRepository.findOne({ where: { email } });

    if (!acs) {
      throw new AppError('Incorrect Email/Password validation.', 401);
    }

    if (!(await compare(password, acs.password))) {
      throw new AppError('Incorrect Email/Password validation.', 401);
    }

    const token = sign({}, authConfig.secret, {
      subject: acs.id,
      expiresIn: authConfig.expiresIn,
    });

    delete acs.password;

    return {
      acs: {
        ...acs,
        avatar: `${process.env.APP_URL}/files/${acs.avatar}`,
      },
      token,
    };
  }
}

export default AuthenticateAcsService;
