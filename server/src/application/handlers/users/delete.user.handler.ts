import userRepository from "../../../infrastructure/repositories/user.repository";
import {DeleteUserCommand} from "../../commands/users/delete.user.command";
import {UserNotFound} from "../../../domain/exceptions/UserNotFound";

class DeleteUserHandler {
  async execute(command: DeleteUserCommand) {
    const user = await userRepository.findOneById(command.getId());

    if (!user) {
      throw new UserNotFound();
    }

    await userRepository.deleteById(command.getId());
  }
}

export default new DeleteUserHandler();
