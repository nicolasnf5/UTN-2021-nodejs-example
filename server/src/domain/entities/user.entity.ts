import {v4} from 'uuid';
import {Nullable} from "../valueObjects/Nullable";

export class User {

  private id: string;
  private firstName: Nullable<string>;
  private lastName: Nullable<string>;
  private email: string;
  private password: string;

  constructor(
    id: string,
    email: string,
    password: string,
  ) {
    this.email = email;
    this.password = password;
    this.id = id;
    this.firstName = null;
    this.lastName = null;
  }

  public static create(email: string, password: string, firstName: string, lastName: string): User {

    const id = v4();
    const user = new User(id, email, password);
    user.firstName = firstName;
    user.lastName = lastName;

    // Add record event for open/closed principle
    return user;
  }

  static fromPrimitives(primitives: any): User {
    const user = new User(primitives.id, primitives.email, primitives.password);
    user.firstName = primitives.firstName;
    user.lastName = primitives.lastName;

    return user;
  }

  changeEmail(email: string): void {
    this.email = email;
    // Add record event for listeners
  }

  changeNames(firstName: string, lastName: string): void {
    if (this.firstName && this.lastName) {
      return;
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getFirstName(): Nullable<string> {
    return this.firstName;
  }

  getLastName(): Nullable<string> {
    return this.lastName;
  }

  toPrimitives(): any {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
    }
  }
}
