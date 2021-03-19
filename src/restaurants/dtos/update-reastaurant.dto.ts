import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType()
// CreateRestaurantDto로 PartialType을 한 이유는 id가 필요해서
class UpdateRestaurantInputType extends PartialType(CreateRestaurantDto) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(type => Number)
  id: number;

  @Field(type => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
