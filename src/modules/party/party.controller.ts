import {
    Controller,
    Body,
    Post
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PartyService } from './party.service';

@Controller('party')
@ApiTags('party')
export class PartyController {
    constructor(
        private partyService: PartyService,
    ) {}

    /**
     * @param {string} slackToken 파티를 생성한 유저의 토큰
     * @param {string} channel 채널코드
     * @param {string} location 장소
     * @param {number} time 시간
     * @description 해당 파티명으로 파티 생성 대기
     * @returns {boolean} 성공실패값
    */
    @Post()
    createParty(@Body() body) {
        return this.partyService.createParty(body.slackToken, body.location, body.time, body.channel);
    }

    /**
     * @param {string} slackToken 파티를 생성한 유저의 토큰
     * @param {string} partyName 파티명
     * @param {string} channel 채널코드
     * @description 해당 파티명으로 파티 생성 대기
     * @returns {boolean} 성공실패값
    */
    @Post('/new')
    newParty(@Body() body) {
        return this.partyService.newParty(body.slackToken, body.partyName, body.channel)
    }
}