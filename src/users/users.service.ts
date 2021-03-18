import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createAccountInput, createAccountOutput } from "./dtos/create-account.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>
    ) { }

    async createAccout({ email, password, role }: createAccountInput): Promise<[boolean, string?]> {
        try {
            const exists = await this.users.findOne({ email })
            if (exists) {
                return [false, 'email exist'];
            }
            await this.users.save(this.users.create({ email, password, role }));
            return [true];
        } catch (e) {
            return [false, "couldn't creat"];
        }
    }
}