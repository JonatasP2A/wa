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

@Entity('attendances')
class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pacient, pacient => pacient.attendance_id)
  @JoinColumn({ name: 'attendance_id' })
  pacient: Pacient;

  @Column()
  start_hour: Date;

  @Column()
  end_hour: Date;

  @Column()
  treatment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Attendance;
