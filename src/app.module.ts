import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WinstonModuleConfig } from './config/logger';
import { TypeOrmConfig } from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'}`,
      ignoreEnvFile: process.env.NODE_ENV === 'prod'
    }), 
    new WinstonModuleConfig().loggerModule,
    new TypeOrmConfig().TypeOrmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule{
}
