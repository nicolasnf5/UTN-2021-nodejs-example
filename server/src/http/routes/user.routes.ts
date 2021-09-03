import { Application } from "express";
import listUsersAction from "../actions/users/list.users.action";
import createUserAction from "../actions/users/create.user.action";
import CommonRoutes from "./common.routes";
import updateUserAction from "../actions/users/update.user.action";
import deleteUserAction from "../actions/users/delete.user.action";

class UserRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'User');
  }

  setUpRoutes(): Application {
    this.app.get('/users', listUsersAction.run);

    this.app.post('/users', createUserAction.run);

    this.app.put('/users/:id', updateUserAction.run);

    this.app.delete('/users/:id', deleteUserAction.run);

    return this.app;
  }
}

export default UserRoutes;
