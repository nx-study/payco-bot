import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PartyController } from './party.controller';
import { PartyEntity } from './party.entity';
import { PartyService } from './party.service';

@Module({
  imports: [TypeOrmModule.forFeature([PartyEntity])],
  controllers: [PartyController],
  exports: [PartyService],
  providers: [PartyService],
})
export class UserModule {}