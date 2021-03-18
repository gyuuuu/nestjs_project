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
    async reateAccount(@Args("input") createAccountInput: createAccountInput): Promise<createAccountOutput> {
        try {
            const [ok, error] = await this.userService.createAccout(createAccountInput);
            return {
                ok,
                error
            }
        } catch (e) {
            return {
                error: e,
                ok: false,
            }
        }
    }
}