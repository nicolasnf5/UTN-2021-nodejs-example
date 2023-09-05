import uuidValidate from 'uuid-validate';
import {ValidationError} from "../../exceptions/ValidationError";

export class DeleteUserCommand {
  private readonly id: string;

  public constructor(
    id: string,
  ) {
    if (!id) {
      throw new ValidationError('id is required');
    }

    if (!uuidValidate(id)) {
      throw new ValidationError('uuid must be a valid uuid');
    }

    this.id = id;
  }

  getId() {
    return this.id;
  }
}
