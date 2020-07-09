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

  @ManyToOne(() => Pacient)
  @JoinColumn({ name: 'provider_id' })
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
