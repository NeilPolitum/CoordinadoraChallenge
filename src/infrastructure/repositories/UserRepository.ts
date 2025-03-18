import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User } from '../../domain/entities/User';

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async findById(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.users.find(user => user.username === username) || null;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
