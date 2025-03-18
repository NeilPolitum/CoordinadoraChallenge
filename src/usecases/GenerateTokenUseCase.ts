import { User } from '../domain/entities/User';
import { generateToken } from '../config/jwt';

export class GenerateTokenUseCase {
  execute(user: User): string {
    return generateToken({ userId: user.id, username: user.username });
  }
}
