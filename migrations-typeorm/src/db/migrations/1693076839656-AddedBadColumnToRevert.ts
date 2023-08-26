import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedBadColumnToRevert1693076839656 implements MigrationInterface {
  name = 'AddedBadColumnToRevert1693076839656';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "bad_column" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "bad_column"`);
  }
}
