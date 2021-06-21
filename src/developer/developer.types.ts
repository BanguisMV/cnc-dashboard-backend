import { IsNotEmpty, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { ObjectType, Field, ID, InputType, PartialType } from '@nestjs/graphql';


@ObjectType()
export class DeveloperType {

  @Field(type => ID, { nullable: true })
  _id?: string;

  @Field()
  name: string;

  @Field()
  fullName: string;

  @Field()
  userName: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

}

@InputType()
export class CreateDeveloperInput {

  _id?: string;
  
  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {message:"Firstname is too long. 100 Characters Only"})
  name?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {message:"Lastname is too long. 100 Characters Only"})
  fullName?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5, {message:"Username is too short. 5 Characters is the minimum"})
  @MaxLength(100, {message:"Username is too long. 100 Characters Only"})
  userName?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5, {message:"Password is too short. 5 Characters is the minimum"})
  @MaxLength(1500, {message:"Password is too long, 120 Characters Only"})
  password?: string;

}