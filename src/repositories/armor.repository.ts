import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Armor, ArmorRelations, Character} from '../models';
import {CharacterRepository} from './character.repository';
export class ArmorRepository extends DefaultCrudRepository<
  Armor,
  typeof Armor.prototype.id,
  ArmorRelations
> {
  public readonly character: BelongsToAccessor<
  Character,
  typeof Armor.prototype.id
>;
constructor(
  @inject('datasources.mongo') dataSource: MongoDataSource,
  @repository.getter('CharacterRepository')
  protected characterRepositoryGetter: Getter<CharacterRepository>,
) {
  super(Armor, dataSource);
  this.character = this.createBelongsToAccessorFor('character',characterRepositoryGetter);
}
}
