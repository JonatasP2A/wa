import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddAttendanceDateToAttendances1616882754365
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'attendances',
      new TableColumn({
        name: 'attendance_date',
        type: 'timestamp with time zone',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('attendances', 'attendance_date');
  }
}
