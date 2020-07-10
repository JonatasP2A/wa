import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
} from 'typeorm';

import { Expose } from 'class-transformer';

import Attendance from '@modules/attendances/infra/typeorm/entities/Attendance';
import Payment from '@modules/payments/infra/typeorm/entities/Payment';

@Entity('pacients')
class Pacient {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;

  @OneToMany(() => Attendance, attendance => attendance.pacient)
  attendance_id: Attendance;

  @OneToMany(() => Payment, payment => payment.pacient)
  payment_id: Payment;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @Column()
  address: string;

  @Column()
  job: string;

  @Column()
  birthday: string;

  @Column()
  instagram: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pacient;
