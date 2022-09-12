import {Request, Response} from "express";
import {DeleteUserCommand} from "../../../application/commands/users/delete.user.command";
import deleteUserHandler from "../../../application/handlers/users/delete.user.handler";

class DeleteUserAction {
  async run(req: Request, res: Response) {
    try {
      const command: DeleteUserCommand = new DeleteUserCommand(req.params.id);
      try {
        await deleteUserHandler.execute(command);
      } catch (error) {
        const {message} = error as Error;
        return res.status(404).json({message});
      }

      return res.status(204).send();
    } catch (e) {
      const {message} = e as Error;
      return res.status(400).json({message});
    }
  }
}

export default new DeleteUserAction();
