import userRepository from "../../../infrastructure/repositories/user.repository";
import { UpdateUserCommand } from "../../commands/users/update.user.command";
import {User} from "../../../domain/entities/user.entity";

class UpdateUserHandler {
    async execute(command: UpdateUserCommand) {
        const user: User | null = await userRepository.findOneById(command.getId());

        if (!user) {
            throw new Error('User not found');
        }

        user.changeEmail(command.getEmail());
        user.changeNames(command.getFirstName(), command.getLastName());

        await userRepository.save(user);
    }
}

export default new UpdateUserHandler();
