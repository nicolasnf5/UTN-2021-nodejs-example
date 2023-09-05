import uuidValidate from "uuid-validate";
import {ValidationError} from "../../exceptions/ValidationError";

export class UpdateUserCommand {
  private readonly id: string;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly email: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
  ) {
    if (!uuidValidate(id)) {
      throw new ValidationError("id must be a valid uuid");
    }

    if (!firstName || !lastName) {
      throw new ValidationError("firstName and lastName must be specified");
    }

    if (!email) {
      throw new ValidationError("email must be specified");
    }

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}
