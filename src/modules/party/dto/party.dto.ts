import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/abstract.dto';
import { StoreCategory } from 'src/enums/store-category';
import { PartyEntity } from '../party.entity';

export type PartyDtoOptions = Partial<{ isActive: boolean }>;

export class PartyDto extends AbstractDto {
    @ApiProperty()
    st: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;

    @ApiPropertyOptional()
    naverId?: number;

    @ApiProperty({ enum: StoreCategory })
    category: StoreCategory;

    @ApiPropertyOptional()
    distance?: number;

    constructor(party: PartyEntity, options?: PartyDtoOptions) {
        super(party);
        this.st = party.st;
        this.name = party.name;
        this.address = party.address;
        this.naverId = party.naverId;
        this.category = party.category;
        this.distance = party.distance
    }
}