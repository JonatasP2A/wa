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

@Entity('attendances')
class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pacient_id: string;

  @ManyToOne(() => Pacient, { eager: true })
  @JoinColumn({ name: 'pacient_id' })
  pacient: Pacient;

  @Column('timestamp without time zone')
  attendance_date: Date;

  @Column('timestamp without time zone')
  start_hour: Date;

  @Column('timestamp without time zone')
  end_hour: Date;

  @Column()
  treatment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Attendance;
