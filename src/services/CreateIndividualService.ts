import { getRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import Individual from '../models/Individual';

interface Request {
  family_id: string;
  name: string;
  cns: string;
  cpf: string;
  birthday: string;
  sex: string;
  color: string;
  father_name: string;
  mother_name: string;
  nationality: string;
  birth_country: string;
  birth_state: string;
  is_school_frequency?: boolean;
  education: string;
  work: string;
  is_deficient?: boolean;
  deficient_faulty: string;
  is_pregnant?: boolean;
  is_smoker?: boolean;
  imc: string;
  is_drug_addict?: boolean;
  is_alcoholic?: boolean;
  is_hypertensive?: boolean;
  is_diabetic?: boolean;
  is_stroke?: boolean;
  is_infarct?: boolean;
  is_heart_sick?: boolean;
  heart_disease: string;
  is_kidney_sick?: boolean;
  kidney_disease: string;
  is_respiratory_sick?: boolean;
  respiratory_disease: string;
  is_hanseniase?: boolean;
  is_tuberculosis?: boolean;
  is_cancer?: boolean;
  is_hospitalization_last_12_months?: boolean;
  hospitalization_cause: string;
  is_mental_sick?: boolean;
  is_bedridden?: boolean;
  is_domicilied?: boolean;
  is_homeless?: boolean;
}

class CreateIndividualService {
  public async execute(args: Request): Promise<Individual> {
    const individualRepository = getRepository(Individual);

    const parsedDate = parseISO(args.birthday);

    const individual = individualRepository.create({
      ...args,
      birthday: parsedDate,
    });

    await individualRepository.save(individual);

    return individual;
  }
}

export default CreateIndividualService;
