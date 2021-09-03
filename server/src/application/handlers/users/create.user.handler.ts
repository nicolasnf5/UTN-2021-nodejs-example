import { User } from "../../../domain/entities/user.entity";
import userRepository from "../../../infrastructure/repositories/user.repository";
import { CreateUserCommand } from "../../commands/users/create.user.command";

class CreateUserHandler {
    async execute(command: CreateUserCommand) {
        const user: User = {
            email: command.email,
            password: command.password,
            firstName: command.firstName,
            lastName: command.lastName
        };
        
        await userRepository.save(user);
    }
}

export default new CreateUserHandler();