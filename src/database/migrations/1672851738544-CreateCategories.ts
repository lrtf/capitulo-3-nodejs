import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1672851738544 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",

                columns: [
                    {
                        name: "id",

                        type: "uuid",

                        isPrimary: true,
                    },

                    {
                        name: "name",

                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },

                    {
                        name: "created_at",

                        type: "timestamp",

                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return null;
    }
}
