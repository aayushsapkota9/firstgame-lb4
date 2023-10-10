import {Entity, hasOne, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';
import {Armor} from './armor.model';
import {Skill} from './skill.model';
import {Weapon} from './weapon.model';
@model()
export class Character extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),

  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  level?: number;

  @hasOne(() => Armor)
  armor?: Armor;

  @hasOne(() => Weapon)
  weapon?: Weapon;

  @hasOne(() => Skill)
  skill?: Skill;

  constructor(data?: Partial<Character>) {
    super(data);
  }
}

export interface CharacterRelations {
  // describe navigational properties here
}

export type CharacterWithRelations = Character & CharacterRelations;