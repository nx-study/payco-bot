import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

import type { IAbstractEntity } from '../../common/abstract.entity';
import { AbstractEntity } from '../../common/abstract.entity';
import { StoreCategory } from 'src/enums/store-category';
import { PartyDto, PartyDtoOptions } from './dto/party.dto';

export interface IPartyEntity extends IAbstractEntity<PartyDto> {
    st: string;

    name: string;

    address: string;

    naverId?: number;

    distance?: number;

    category: StoreCategory;
}

@Entity({ name: 'party' })
// @UseDto(UserDto)
export class PartyEntity extends AbstractEntity<PartyDto, PartyDtoOptions> implements IPartyEntity {
    @Column()
    st: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column({ type: 'enum', enum: StoreCategory, default: StoreCategory.ETC })
    category: StoreCategory;

    @Column({ nullable: true })
    distance?: number;

    @Column({ nullable: true })
    naverId?: number;
}