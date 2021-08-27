import { Application, Request, Response } from "express";
import listUsersAction from "../actions/users/list.users.action";
import createUserAction from "../actions/users/create.user.action";
import CommonRoutes from "./common.routes";

class UserRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'User');
  }

  setUpRoutes(): Application {
    this.app.get('/users', listUsersAction.run);

    this.app.post('/users', createUserAction.run);

    this.app.put('/users/:id', (req: Request, res: Response) => {
      if (!req.params.id) {
        return res.status(404);
      }

      //const user = this.users.find(u => u.id === req.params.id);

      //if (!user) {
        return res.status(404);
      //}

      //user.email = req.body.email;
      //user.password = req.body.password;

      //const index = this.users.findIndex((u) => u.id === user.id);
      //this.users[index] = user;

      return res.status(200);
    });

    this.app.delete('/users/:id', (req: Request, res: Response) => {
      if (!req.params.id) {
        return res.status(404);
      }

      //this.users = this.users.filter(u => u.id !== req.params.id);

      return res.status(204);
    });

    return this.app;
  }
}

export default UserRoutes;
