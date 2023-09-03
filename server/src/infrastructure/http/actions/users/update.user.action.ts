import {Request, Response} from "express";
import {UpdateUserCommand} from "../../../../application/commands/users/update.user.command";
import updateUserHandler from "../../../../application/handlers/users/update.user.handler";

class UpdateUserAction {
  async run(req: Request, res: Response) {

    const command = new UpdateUserCommand(
      req.params.id,
      req.body.firstName,
      req.body.lastName,
      req.body.email,
    );

    await updateUserHandler.execute(command);

    return res.status(200).json({message: "User updated"});
  }
}

export default new UpdateUserAction();
