import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateIndividuals1597472067425
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'individuals',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'family_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'cns',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birthday',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sex',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'color',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'father_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'mother_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nationality',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birth_country',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birth_state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'is_school_frequency',
            type: 'boolean',
            default: false,
          },
          {
            name: 'education',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'work',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_deficient',
            type: 'boolean',
            default: false,
          },
          {
            name: 'deficient_faulty',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_pregnant',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_smoker',
            type: 'boolean',
            default: false,
          },
          {
            name: 'imc',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'is_drug_addict',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_alcoholic',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_hypertensive',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_diabetic',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_stroke',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_infarct',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_heart_sick',
            type: 'boolean',
            default: false,
          },
          {
            name: 'heart_disease',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_kidney_sick',
            type: 'boolean',
            default: false,
          },
          {
            name: 'kidney_disease',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_respiratory_sick',
            type: 'boolean',
            default: false,
          },
          {
            name: 'respiratory_disease',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_hanseniase',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_tuberculosis',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_cancer',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_hospitalization_last_12_months',
            type: 'boolean',
            default: false,
          },
          {
            name: 'hospitalization_cause',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_mental_sick',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_bedridden',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_domicilied',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_homeless',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'individuals',
      new TableForeignKey({
        name: 'IndividualFamily',
        columnNames: ['family_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'families',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('individuals');
  }
}
