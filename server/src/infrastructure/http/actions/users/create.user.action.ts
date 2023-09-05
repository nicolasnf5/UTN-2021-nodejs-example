import {Request, Response} from "express";
import {CreateUserCommand} from "../../../../application/commands/users/create.user.command";
import createUserHandler from "../../../../application/handlers/users/create.user.handler";

class CreateUserAction {
  async run(req: Request, res: Response) {
    const {firstName, lastName, email, password} = req.body;

    const command = new CreateUserCommand(email, password, firstName, lastName);

    await createUserHandler.execute(command);

    return res.status(201).json({message: "User created"});
  }
}

export default new CreateUserAction();
