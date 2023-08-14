import {Request, Response} from "express";
import {UpdateUserCommand} from "../../../application/commands/users/update.user.command";
import updateUserHandler from "../../../application/handlers/users/update.user.handler";

class UpdateUserAction {
  async run(req: Request, res: Response) {

    try {
      const command = new UpdateUserCommand(
        req.params.id,
        req.body.firstName,
        req.body.lastName,
        req.body.email,
      );

      try {
        await updateUserHandler.execute(command);
      } catch (error) {
        return res.status(404).json({message: error.message});
      }

      return res.status(200).json({message: "User updated"});
    } catch (e) {
      const {message} = e as Error;
      res.status(400).json({message});
    }
  }
}

export default new UpdateUserAction();
