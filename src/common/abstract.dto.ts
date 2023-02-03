import { ApiProperty } from '@nestjs/swagger';
import type { AbstractEntity } from './abstract.entity';

export class AbstractDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    translations?: AbstractTranslationDto[];

    constructor(entity: AbstractEntity, options?: { excludeFields?: boolean }) {
        if (!options?.excludeFields) {
            this.id = entity.id;
            this.createdAt = entity.createdAt;
            this.updatedAt = entity.updatedAt;
        }

        const languageCode = 'en_US';

    }
}

export class AbstractTranslationDto extends AbstractDto {
    constructor(entity: AbstractEntity) {
        super(entity, { excludeFields: true });
    }
}