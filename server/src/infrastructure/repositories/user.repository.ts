import { User } from "../../domain/entities/user.entity";
import uuid from 'uuid'

class UserRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }

    async findOneById(id: string): Promise<User | null> {
        const user = this.users.find(u => u.id === id);

        return (user) ? user : null;
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async save(user: User): Promise<void> {
        if (!user.id) {
            user.id = uuid.v4();
            this.users.push(user);
        } else {
            this.users = this.users.map(function(u) {
                return u.id === user.id ? user : u;
            });
        }
    }

    async deleteById(id: string): Promise<void> {
        this.users = this.users.filter(u => u.id !== id);
    }
}

export default new UserRepository();
