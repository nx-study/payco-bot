import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { FindOptionsWhere } from 'typeorm';
import { Repository } from 'typeorm';
import { PartyDto } from './dto/party.dto';
import { PartyEntity } from './party.entity';

// 생성 전 캐시 저장
const cache:Map<string, string> = new Map;

@Injectable()
export class PartyService {
    constructor(
        @InjectRepository(PartyEntity)
        private partyRepository: Repository<PartyEntity>,
    ) {}

    async createParty(slackToken: string, location: string, time: number, channel: string) {
        const partyName = cache.get(slackToken);

        // 해당되는 가게 찾기
        this.partyRepository.findBy;

        let partyEntity :FindOptionsWhere<PartyEntity>;
        partyEntity.name = partyName;

        const findParties: Promise<PartyEntity[]> = this.partyRepository.findBy(partyEntity);

        //** TODO 중복되는 경우 선택지 메세지 날리기 필요

        // party db 저장
        let result = '';

        // 생성 완료 메세지 전송
        // 이모지  O, X

        return result!=null;
    }

    /**
     * @param {string} slackToken 파티를 생성한 유저의 토큰
     * @param {string} partyName 파티명
     * @param {string} channel 채널코드
     * @description 파티 생성 전 임시 호출
     * @returns {boolean} 성공실패값
    */
    async newParty(slackToken: string, partyName: string, channel: string) {
        cache.set(slackToken, partyName);
        this.clearCache(slackToken, 600);

        const msg: string = `🍴점심 팟 [${partyName}]을 생성합니다 !\n스래드에서 세부 내용을 설정해주세요.`;
        // 슬랙 보내기

        const question: string = `장소/시간을 입력해주세요\n 시간은 24시간제로 입력해주세요!\n * 예시: 버거킹/1145`;
        // 스래드 전송

        return true;
    }

    private clearCache(key: string, sec: number) {
        setTimeout(() => cache.delete(key), sec*1000);
    }
}