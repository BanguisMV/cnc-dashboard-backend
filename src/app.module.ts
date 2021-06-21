import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DeveloperModule } from './developer/developer.module';

@Module({
  imports: [
    GraphQLModule.forRoot({  
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
    context:(({req}) => ({  headers: req.headers })) 
  }),
    DeveloperModule,
]
})
export class AppModule {}
