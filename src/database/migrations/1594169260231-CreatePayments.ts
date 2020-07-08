import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePayments1594169260231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payments',
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
            name: 'form_payment',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'decimal',
            precision: 8,
            scale: 2,
          },
          {
            name: 'payment_day',
            type: 'timestamp with time zone',
          },
          {
            name: 'agency',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'account',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'name_cheque',
            type: 'varchar',
            isNullable: true,
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
    await queryRunner.dropTable('payments');
  }
}
