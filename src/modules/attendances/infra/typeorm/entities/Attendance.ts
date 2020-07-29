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

  @Column('timestamp with time zone')
  start_hour: Date;

  @Column('timestamp with time zone')
  end_hour: Date;

  @Column()
  treatment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Attendance;
