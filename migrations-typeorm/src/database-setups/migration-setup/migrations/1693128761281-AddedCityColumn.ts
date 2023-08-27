import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCityColumn1693128761281 implements MigrationInterface {
    name = 'AddedCityColumn1693128761281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "city" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "city"`);
    }

}
