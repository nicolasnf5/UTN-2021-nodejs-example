import { Request, Response } from "express";
import { UpdateUserCommand } from "../../../application/commands/users/update.user.command";
import updateUserHandler from "../../../application/handlers/users/update.user.handler";

class UpdateUserAction {
    async run(req: Request, res: Response) {
        const command: UpdateUserCommand = {
            id: req.params.id,
            ...req.body,
        };

        try {
            await updateUserHandler.execute(command);
        } catch (error) {
            return res.status(404).json({message: error.message});
        }

        return res.status(200).json({message: "User updated"});
    }
}

export default new UpdateUserAction();