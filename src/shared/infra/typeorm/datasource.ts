import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",

    host: "localhost",

    username: "postgres",

    password: "postgres",

    database: "aula02",

    migrations: ["./src/database/migrations/**/*.ts"],

    entities: ["./src/modules/**/entities/*.{ts,js}"],
});

export const createConnection = (host = "database"): Promise<DataSource> => {
    return AppDataSource.setOptions({ host }).initialize();
};

export default AppDataSource;
