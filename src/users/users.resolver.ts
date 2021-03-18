import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createAccountInput, createAccountOutput } from "./dtos/create-account.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Resolver(of => User)
export class UsersResolver {
    constructor(
        private readonly userService: UsersService
    ) { }

    @Query(returns => Boolean)
    hi() {
        return true;
    }

    @Mutation(returns => createAccountOutput)
    createAccount(@Args("input") createAccountInput: createAccountInput) {

    }
}