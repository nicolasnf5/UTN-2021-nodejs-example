import { Request, Response } from "express";
import { CreateUserCommand } from "../../../application/commands/users/create.user.command";
import createUserHandler from "../../../application/handlers/users/create.user.handler";

class CreateUserAction {
    async run(req: Request, res: Response) {
        const command: CreateUserCommand = req.body;
    
        if (!command.email || !command.password) {
            return res.status(400).json({message: "Email or password missing"});
        }
        
        await createUserHandler.execute(command);
        
        return res.status(201).json({message: "User created"});
    }
}

export default new CreateUserAction();