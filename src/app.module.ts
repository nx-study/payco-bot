import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as moment from 'moment';

const env = process.env.NODE_ENV;
const loggerLever =  env === 'PROD' ? 'info' : 'debug';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({  
          handleExceptions: true,
          level: loggerLever,
          format: winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike('Payco-bot', {
                prettyPrint: true,
            }),
            winston.format.colorize({ all: true })
          )
        }),
        new winston.transports.File({ 
          dirname: `./logs`,
          filename: `${moment(new Date()).format('YYYY-MM-DD')}.log`,
          level: loggerLever,
          format: winston.format.combine(
            winston.format.timestamp(),
            utilities.format.nestLike('Payco-bot', {
                prettyPrint: true,
            })
          ),
          maxFiles: 30
        }),
      ],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule{
}
