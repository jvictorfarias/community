import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Family from './Family';

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  family_id: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column()
  number: number;

  @Column()
  phone: string;

  @OneToOne(() => Family, family => family.address, {
    eager: true,
    cascade: ['insert'],
  })
  @JoinColumn({ name: 'family_id' })
  family: Family;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
