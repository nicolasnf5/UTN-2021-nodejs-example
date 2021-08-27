import { Request, Response } from "express";
import { User } from "../../../domain/entities/user.entity";
import userRepository from "../../../infrastructure/repositories/user.repository";

class ListUsersAction {
    async run(_req: Request, res: Response) {
       const users: User[] = await userRepository.findAll();
       
       return res.status(200).json(users);
    }
}

export default new ListUsersAction();