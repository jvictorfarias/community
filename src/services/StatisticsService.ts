import { getRepository } from 'typeorm';

import Family from '../models/Family';
import Individual from '../models/Individual';

interface Response {
  totalFamilies: number;
  totalIndividuals: number;
  totalPregnants: number;
  totalHypertensives: number;
  totalDiabetics: number;
}

class StatisticsService {
  public async execute(): Promise<Response> {
    const familyRepository = getRepository(Family);
    const individualRepository = getRepository(Individual);

    const totalFamilies = await familyRepository.count();
    const totalIndividuals = await individualRepository.count();
    const totalPregnants = await individualRepository.count({
      where: { is_pregnant: true },
    });
    const totalHypertensives = await individualRepository.count({
      where: { is_hypertensive: true },
    });
    const totalDiabetics = await individualRepository.count({
      where: { is_diabetic: true },
    });

    return {
      totalFamilies,
      totalIndividuals,
      totalPregnants,
      totalHypertensives,
      totalDiabetics,
    };
  }
}

export default StatisticsService;
