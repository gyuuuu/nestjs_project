import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
// Omitype의 두번째 파라미터는 Restaurant클래스의 데코레이터 속성을 변경해준다.
// 원래는 ObjectType인데 OnitType은 InputType만 받을 수 있어서 바꿔줘야한다.
// https://nomadcoders.co/nuber-eats/lectures/2001, https://docs.nestjs.com/graphql/mapped-types
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'] /*, InputType*/,
) {}
