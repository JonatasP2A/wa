import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddPhoneToPacients1594235703060
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'pacients',
      new TableColumn({
        name: 'phone',
        type: 'int',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('pacients', 'phone');
  }
}
