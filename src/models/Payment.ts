import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';

import Pacient from './Pacient';

@Entity('payments')
class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pacient, pacient => pacient.payment_id)
  @JoinColumn({ name: 'pacient_id' })
  pacient: Pacient;

  @Column()
  form_payment: string;

  @Column('decimal')
  amount: number;

  @Column()
  payment_day: Date;

  @Column()
  agency: string;

  @Column()
  name_cheque: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Payment;
