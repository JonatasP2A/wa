import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';

import Pacient from '@modules/pacients/infra/typeorm/entities/Pacient';

@Entity('payments')
class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pacient_id: string;

  @ManyToOne(() => Pacient)
  @JoinColumn({ name: 'pacient_id' })
  pacient: Pacient;

  @Column()
  form_payment: string;

  @Column('decimal')
  amount: number;

  @Column()
  payment_day: Date;

  @Column()
  agency: number;

  @Column()
  account: number;

  @Column()
  name_cheque: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Payment;
