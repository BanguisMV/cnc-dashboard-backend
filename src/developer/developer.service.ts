
import { Injectable } from '@nestjs/common';
import { CreateDeveloperInput,DeveloperType  } from './developer.types';


@Injectable()
export class DeveloperService {
  create(CreateDeveloperInput: CreateDeveloperInput):CreateDeveloperInput {
    console.log(CreateDeveloperInput)
    return CreateDeveloperInput;
  }

  findAll() {
    return `This action returns all developer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} developer`;
  }

  update(id: string, updateDeveloperInput: CreateDeveloperInput) {
    return `This action updates a #${id} developer`;
  }

  remove(id: number) {
    return `This action removes a #${id} developer`;
  }
}
