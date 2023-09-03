import {Application, Router} from "express";
import PromiseRouter from 'express-promise-router';

export default abstract class CommonRoutes {
  protected app: Router;
  private name: string;

  constructor(app: Application, name: string) {
    this.app = PromiseRouter();
    app.use(this.app);
    this.name = name;
    this.setUpRoutes();
  }

  public getName() {
    return this.name;
  }

  abstract setUpRoutes(): Router;
}
