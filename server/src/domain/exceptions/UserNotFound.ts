import {DomainException} from "./DomainException";

export class UserNotFound extends DomainException {
  public constructor() {
    super('User not found');
  }
}
