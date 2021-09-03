import { Request, Response} from "express";
import { DeleteUserCommand } from "../../../application/commands/users/delete.user.command";
import deleteUserHandler from "../../../application/handlers/users/delete.user.handler";

class DeleteUserAction {
    async run(req: Request, res: Response) {
        const command: DeleteUserCommand = {
            id: req.params.id,
        };

        try {
            await deleteUserHandler.execute(command);
        } catch (error) {
            return res.status(404).json({message: error.message});
        }

        return res.status(204).send();
    }
}

export default new DeleteUserAction();