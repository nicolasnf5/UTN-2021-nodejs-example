import {User} from "../../domain/entities/user.entity";

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async findOneById(id: string): Promise<User | null> {
    const user = this.users.find(u => u.getId() === id);

    return (user) ? user : null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async save(user: User): Promise<void> {
    const savedUser = this.users.find(u => u.getId() === user.getId())

    if (savedUser) {
      this.users.splice(this.users.indexOf(savedUser), 1)
    }

    this.users.push(user);
  }

  async deleteById(id: string): Promise<void> {
    this.users = this.users.filter(u => u.getId() !== id);
  }
}

export default new UserRepository();
