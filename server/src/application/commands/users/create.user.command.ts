export class CreateUserCommand {
  private readonly email: string;
  private readonly password: string;
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }
}
