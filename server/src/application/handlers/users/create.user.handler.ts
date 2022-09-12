import {User} from "../../../domain/entities/user.entity";
import userRepository from "../../../infrastructure/repositories/user.repository";
import {CreateUserCommand} from "../../commands/users/create.user.command";

class CreateUserHandler {
  async execute(command: CreateUserCommand) {

    const user = User.create(
      command.getEmail(),
      command.getPassword(),
      command.getFirstName(),
      command.getLastName()
    );

    await userRepository.save(user);
  }
}

export default new CreateUserHandler();
