import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
} from 'typeorm';

import Attendance from './Attendance';
import Payment from './Payment';

@Entity('pacients')
class Pacient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Attendance, attendance => attendance.pacient, {
    eager: true,
    cascade: true,
  })
  attendance_id: Attendance[];

  @OneToMany(() => Payment, payment => payment.pacient, {
    eager: true,
    cascade: true,
  })
  payment_id: Payment[];

  @Column()
  name: string;

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
