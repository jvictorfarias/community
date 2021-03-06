import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Family from './Family';

@Entity('acs')
class Acs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cns: string;

  @Column()
  cbo: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @OneToMany(() => Family, family => family.acs, {
    eager: false,
  })
  families: Family[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Acs;
