import {NextFunction, Request, Response} from "express";
import {DomainException} from "../../../domain/exceptions/DomainException";
import {ApplicationException} from "../../../application/exceptions/ApplicationException";
import {UserNotFound} from "../../../domain/exceptions/UserNotFound";
import {BaseHttpException} from "../../exceptions/BaseHttpException";
import {InfrastructureException} from "../../exceptions/InfrastructureException";

export class ExpressErrorHandler {
  public handle(err: Error, req: Request, res: Response, next: NextFunction) {
    switch (err.name) {
      case UserNotFound.name:
        res.status(404).json({message: err.message});
        break;
      case DomainException.name:
        res.status(400).json({message: err.message});
        break;
      case ApplicationException.name:
        res.status(409).json({message: err.message});
        break;
      case InfrastructureException.name:
        console.log(
          {
            // @ts-ignore
            message: err.defaultError?.message,
          }
        );
        res.status(500).json({message: 'internal server error'});
        break;
      case BaseHttpException.name:
        // @ts-expect-error
        res.status(err.status).json({message: err.message});
        break
      default:
        res.status(500).json({message: err.message});
        break;
    }
  }
}

export default new ExpressErrorHandler();
