import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedCityColumn1691482688841 implements MigrationInterface {
  name = 'AddedCityColumn1691482688841';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "city" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "city"`);
  }
}
