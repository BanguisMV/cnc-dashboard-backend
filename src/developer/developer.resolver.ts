import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeveloperService } from './developer.service';
import { DeveloperType, CreateDeveloperInput } from './developer.types';

@Resolver(() => DeveloperType)
export class DeveloperResolver {
  constructor(private readonly developerService: DeveloperService) {}

  @Mutation(() => DeveloperType)
  createDeveloper(@Args('createDeveloperInput') createDeveloperInput: CreateDeveloperInput) {
    return this.developerService.create(createDeveloperInput);
  }

  @Query(() => [DeveloperType], { name: 'developer' })
  findAll() {
    return this.developerService.findAll();
  }

  @Query(() => DeveloperType, { name: 'developer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.developerService.findOne(id);
  }

  @Mutation(() => DeveloperType)
  updateDeveloper(@Args('updateDeveloperInput') updateDeveloperInput: CreateDeveloperInput) {
    return this.developerService.update(updateDeveloperInput._id, updateDeveloperInput);
  }

  @Mutation(() => DeveloperType)
  removeDeveloper(@Args('id', { type: () => Int }) id: number) {
    return this.developerService.remove(id);
  }
}
