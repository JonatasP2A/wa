import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAttendances1594168717376
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attendances',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'pacient_id',
            type: 'uuid',
          },
          {
            name: 'start_hour',
            type: 'timestamp with time zone',
          },
          {
            name: 'end_hour',
            type: 'timestamp with time zone',
          },
          {
            name: 'treatment',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'pacientId',
            columnNames: ['pacient_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pacients',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('attendances');
  }
}
