import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createAccountInput, createAccountOutput } from "./dtos/create-account.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";
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
    async createAccount(@Args("input") createAccountInput: createAccountInput): Promise<createAccountOutput> {
        try {
            return this.userService.createAccout(createAccountInput);
        } catch (error) {
            return {
                error,
                ok: false,
            };
        }
    }

    @Mutation(returns => LoginOutput)
    async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
        try {
            return this.userService.login(loginInput);
        } catch (error) {
            return {
                ok: false,
                error,
            }
        }
    }
}