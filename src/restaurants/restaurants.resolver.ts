import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class restaurantResolver{
    @Query( returns => Boolean)
    isPizzaGood(): Boolean {
        return true;
    }
}