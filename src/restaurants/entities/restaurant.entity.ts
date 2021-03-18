import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
// https://nomadcoders.co/nuber-eats/lectures/2001
@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number;

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;

    @Field(type => Boolean, { nullable: true }) // for graphql
    @Column({ default: true }) // for database
    @IsOptional() // for dto
    @IsBoolean() // for dto
    isVegan: boolean;

    @Field(type => String, { defaultValue: "강남" })
    @Column()
    @IsString()
    address: string;

    @Field(type => String)
    @Column()
    @IsString()
    ownersName: string;

    @Field(type => String)
    @Column()
    @IsString()
    categoryName: string;
    }