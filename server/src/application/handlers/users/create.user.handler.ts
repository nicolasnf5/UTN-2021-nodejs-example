import {User} from "../../../domain/entities/user.entity";
import userRepository from "../../../infrastructure/repositories/user.repository";
import {CreateUserCommand} from "../../commands/users/create.user.command";

class CreateUserHandler {
  async execute(command: CreateUserCommand) {

    const user: User = {
      email: command.getEmail(),
      password: command.getPassword(),
      firstName: command.getFirstName(),
      lastName: command.getLastName(),
    };

    await userRepository.save(user);
  }
}

export default new CreateUserHandler();
