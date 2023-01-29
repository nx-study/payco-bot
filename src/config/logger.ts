import { utilities, WinstonModule } from 'nest-winston';
import { DynamicModule } from '@nestjs/common';
import * as winston from 'winston';
import * as moment from 'moment';

let loggerLever = 'info';

export class WinstonModuleConfig{
  constructor() {
    loggerLever = process.env.NODE_ENV === 'prod' ? 'info' : 'debug';
  }

  get loggerModule(): DynamicModule {

    return WinstonModule.forRoot({
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
  } 
}