import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Character, Weapon, WeaponRelations} from '../models';
import {CharacterRepository} from './character.repository';
export class WeaponRepository extends DefaultCrudRepository<
  Weapon,
  typeof Weapon.prototype.id,
  WeaponRelations

> {
  public readonly character: BelongsToAccessor<
  Character,
  typeof Weapon.prototype.id
>;
constructor(
  @inject('datasources.mongo') dataSource: MongoDataSource,
  @repository.getter('CharacterRepository')
  protected characterRepositoryGetter: Getter<CharacterRepository>,
) {
  super(Weapon, dataSource);
  this.character = this.createBelongsToAccessorFor('character',characterRepositoryGetter);
}
}
