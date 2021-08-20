import { Application, Request, Response } from "express";
import CommonRoutes from "./common.routes";
import shortid from 'shortid';
import {log} from 'debug';

class UserRoutes extends CommonRoutes {
  private users: any[];
  constructor(app: Application) {
    super(app, 'User');
    this.users = [];
  }

  setUpRoutes() {
    this.app.get('/users', (_req: Request, res: Response) => {
      return res.json({users: this.users});
    });

    this.app.post('/users', (req: Request, res: Response) => {
      log(req.body);
      const user = req.body;

      if (user.email && user.password) {
        user.id = shortid.generate();
        this.users.push(user);
        return res.status(201).json({id: user.id});
      }

      return res.status(400).json({message: "Email or password missing"});
    });

    this.app.put('/users/:id', (req: Request, res: Response) => {
      if (!req.params.id) {
        return res.status(404);
      }

      const user = this.users.find(u => u.id === req.params.id);

      if (!user) {
        return res.status(404);
      }

      user.email = req.body.email;
      user.password = req.body.password;

      const index = this.users.findIndex((u) => u.id === user.id);
      this.users[index] = user;

      return res.status(200);
    });

    return this.app;
  }
}

export default UserRoutes;
