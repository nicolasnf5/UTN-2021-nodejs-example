import userRepository from "../../../infrastructure/repositories/user.repository";
import { UpdateUserCommand } from "../../commands/users/update.user.command";

class UpdateUserHandler {
    async execute(command: UpdateUserCommand) {
        const user = await userRepository.findOneById(command.getId());

        if (!user) {
            throw new Error('User not found');
        }

        user.changeEmail(command.getEmail());

        await userRepository.save(user);
    }
}

export default new UpdateUserHandler();
