import {
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import type { AbstractDto, AbstractTranslationDto } from './abstract.dto';

export interface IAbstractEntity<DTO extends AbstractDto, O = never> {
    createdAt: Date;
    updatedAt: Date;
}

export abstract class AbstractEntity<
    DTO extends AbstractDto = AbstractDto,
    O = never,
> implements IAbstractEntity<DTO, O>
{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        type: 'timestamp',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
    })
    updatedAt: Date;
}

export class AbstractTranslationEntity<
    DTO extends AbstractTranslationDto = AbstractTranslationDto,
    O = never,
> extends AbstractEntity<DTO, O> {
    @Column({ type: 'enum', enum: 'en_US' })
    languageCode: 'en_US';
}