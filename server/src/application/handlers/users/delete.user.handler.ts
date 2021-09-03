import userRepository from "../../../infrastructure/repositories/user.repository";
import { DeleteUserCommand } from "../../commands/users/delete.user.command";

class DeleteUserHandler {
    async execute(command: DeleteUserCommand) {
        const user = await userRepository.findOneById(command.id);

        if (!user) {
            throw new Error('User not found');
        }

        await userRepository.deleteById(command.id);
    }
}

export default new DeleteUserHandler();