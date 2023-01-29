import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WisLog } from 'winston';

@Controller()
export class AppController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly log2: WisLog
    , private readonly appService: AppService
  ) {
    this.log2.error('title');
    this.log2.debug('title');
    this.log2.info('yo', {a: '1'});
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
