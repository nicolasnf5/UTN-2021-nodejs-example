import userRepository from "../../../infrastructure/repositories/user.repository";
import { UpdateUserCommand } from "../../commands/users/update.user.command";

class UpdateUserHandler {
    async execute(command: UpdateUserCommand) {
        const user = await userRepository.findOneById(command.id);

        if (!user) {
            throw new Error('User not found');
        }

        user.email = command.email;
        user.firstName = command.firstName;
        user.lastName = command.lastName;

        await userRepository.save(user);
    }
}

export default new UpdateUserHandler();