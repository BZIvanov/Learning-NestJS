import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedBadColumnToRevert1691482775507 implements MigrationInterface {
  name = 'AddedBadColumnToRevert1691482775507';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "bad_column" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "bad_column"`);
  }
}
