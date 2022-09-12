import userRepository from "../../../infrastructure/repositories/user.repository";
import { UpdateUserCommand } from "../../commands/users/update.user.command";

class UpdateUserHandler {
    async execute(command: UpdateUserCommand) {
        const user = await userRepository.findOneById(command.getId());

        if (!user) {
            throw new Error('User not found');
        }

        user.email = command.getEmail();
        user.firstName = command.getFirstName();
        user.lastName = command.getLastName();

        await userRepository.save(user);
    }
}

export default new UpdateUserHandler();
