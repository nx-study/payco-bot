import { DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

export class TypeOrmConfig {
    get TypeOrmModule(): DynamicModule {
        const  {
            DB_HOST,
            DB_PORT,
            DB_USERNAME,
            DB_PASSWORD,
            DB_DATABASE
        } = process.env;

        return TypeOrmModule.forRoot({
            type: 'mysql',
            host: DB_HOST,
            port: parseInt(DB_PORT),
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_DATABASE,
            entities: []
        });
    }
}