import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Family from './Family';

@Entity('individuals')
class Individual {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  family_id: string;

  @ManyToOne(() => Family, family => family.individuals, {
    eager: true,
  })
  @JoinColumn({ name: 'family_id' })
  family: Family;

  @Column()
  name: string;

  @Column()
  cns: string;

  @Column()
  cpf: string;

  @Column()
  birthday: Date;

  @Column()
  sex: string;

  @Column()
  color: string;

  @Column()
  father_name: string;

  @Column()
  mother_name: string;

  @Column()
  nationality: string;

  @Column()
  birth_country: string;

  @Column()
  birth_state: string;

  @Column()
  is_school_frequency: boolean;

  @Column()
  education: string;

  @Column()
  work: string;

  @Column()
  is_deficient: boolean;

  @Column()
  deficient_faulty: string;

  @Column()
  is_pregnant: boolean;

  @Column()
  is_smoker: boolean;

  @Column()
  imc: string;

  @Column()
  is_drug_addict: boolean;

  @Column()
  is_alcoholic: boolean;

  @Column()
  is_hypertensive: boolean;

  @Column()
  is_diabetic: boolean;

  @Column()
  is_stroke: boolean;

  @Column()
  is_infarct: boolean;

  @Column()
  is_heart_sick: boolean;

  @Column()
  heart_disease: string;

  @Column()
  is_kidney_sick: boolean;

  @Column()
  kidney_disease: string;

  @Column()
  is_respiratory_sick: boolean;

  @Column()
  respiratory_disease: string;

  @Column()
  is_hanseniase: boolean;

  @Column()
  is_tuberculosis: boolean;

  @Column()
  is_cancer: boolean;

  @Column()
  is_hospitalization_last_12_months: boolean;

  @Column()
  hospitalization_cause: string;

  @Column()
  is_mental_sick: boolean;

  @Column()
  is_bedridden: boolean;

  @Column()
  is_domicilied: boolean;

  @Column()
  is_homeless: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Individual;
