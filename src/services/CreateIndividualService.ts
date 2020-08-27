import { getRepository } from 'typeorm';

import Individual from '../models/Individual';
import Logger from '../helpers/Logger';

interface Request {
  [index: string]: string;
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
  is_school_frequency: string;
  education: string;
  work: string;
  is_deficient: string;
  deficient_faulty: string;
  is_pregnant: string;
  is_smoker: string;
  imc: string;
  is_drug_addict: string;
  is_alcoholic: string;
  is_hypertensive: string;
  is_diabetic: string;
  is_stroke: string;
  is_infarct: string;
  is_heart_sick: string;
  heart_disease: string;
  is_kidney_sick: string;
  kidney_disease: string;
  is_respiratory_sick: string;
  respiratory_disease: string;
  is_hanseniase: string;
  is_tuberculosis: string;
  is_cancer: string;
  is_hospitalization_last_12_months: string;
  hospitalization_cause: string;
  is_mental_sick: string;
  is_bedridden: string;
  is_domicilied: string;
  is_homeless: string;
}

class CreateIndividualService {
  public async execute(args: Request): Promise<Individual> {
    const individualRepository = getRepository(Individual);

    Object.keys(args).forEach(key => {
      if (args[key] === 'true' || args[key] === 'false') {
        args[key] = JSON.parse(args[key].toLowerCase());
      }
    });

    const data: Partial<Individual> = args;

    const individual = individualRepository.create(data);

    await individualRepository.save(individual);

    Logger.create(args.family_id, `Cadastrou o indivíduo de nome ${args.name}`);

    return individual;
  }
}

export default CreateIndividualService;
