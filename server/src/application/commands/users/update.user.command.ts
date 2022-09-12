import uuidValidate from "uuid-validate";

export class UpdateUserCommand {
  private readonly id: string;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly email: string;
  private readonly password: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    if (!uuidValidate(id)) {
      throw new Error("id must be a valid uuid");
    }

    if (!firstName || !lastName) {
      throw new Error("firstName and lastName must be specified");
    }

    if (!email) {
      throw new Error("email must be specified");
    }

    if (!password) {
      throw new Error("password must be specified");
    }

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}
