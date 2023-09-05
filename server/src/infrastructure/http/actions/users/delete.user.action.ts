import {Request, Response} from "express";
import {DeleteUserCommand} from "../../../../application/commands/users/delete.user.command";
import deleteUserHandler from "../../../../application/handlers/users/delete.user.handler";

class DeleteUserAction {
  async run(req: Request, res: Response) {
    const command: DeleteUserCommand = new DeleteUserCommand(req.params.id);

    await deleteUserHandler.execute(command);

    return res.status(204).send();
  }
}

export default new DeleteUserAction();
