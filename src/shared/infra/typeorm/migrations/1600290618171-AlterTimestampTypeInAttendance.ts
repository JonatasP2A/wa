import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTimestampTypeInAttendance1600290618171
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('attendances', 'start_hour');

    await queryRunner.dropColumn('attendances', 'end_hour');

    await queryRunner.addColumn(
      'attendances',
      new TableColumn({
        name: 'start_hour',
        type: 'timestamp',
      }),
    );

    await queryRunner.addColumn(
      'attendances',
      new TableColumn({
        name: 'end_hour',
        type: 'timestamp',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('attendances', 'end_hour');

    await queryRunner.dropColumn('attendances', 'start_hour');

    await queryRunner.addColumn(
      'attendances',
      new TableColumn({
        name: 'end_hour',
        type: 'timestamp with time zone',
      }),
    );

    await queryRunner.addColumn(
      'attendances',
      new TableColumn({
        name: 'start_hour',
        type: 'timestamp with time zone',
      }),
    );
  }
}
