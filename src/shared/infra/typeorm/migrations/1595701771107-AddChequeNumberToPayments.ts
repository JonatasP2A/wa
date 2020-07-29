import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddChequeNumberToPayments1595701771107
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'payments',
      new TableColumn({
        name: 'numCheque',
        type: 'integer',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('payments', 'numCheque');
  }
}
