import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import Acs from './Acs';
import Address from './Address';

@Entity('families')
class Family {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  acs_id: string;

  @ManyToOne(() => Acs, acs => acs.families, {
    cascade: ['insert'],
  })
  @JoinColumn({ name: 'acs_id' })
  acs: Acs;

  @OneToOne(() => Address, address => address.family)
  address: Address;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Family;
