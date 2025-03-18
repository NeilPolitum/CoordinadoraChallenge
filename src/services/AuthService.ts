import { IUserRepository } from '../domain/repositories/IUserRepository';
import { GenerateTokenUseCase } from '../usecases/GenerateTokenUseCase';
import { VerifyTokenUseCase } from '../usecases/VerifyTokenUseCase';

export class AuthService {
  constructor(
    private userRepository: IUserRepository,
    private generateTokenUseCase: GenerateTokenUseCase,
    private verifyTokenUseCase: VerifyTokenUseCase
  ) {}

  async generateToken(username: string): Promise<string> {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    return this.generateTokenUseCase.execute(user);
  }

  verifyToken(token: string): object | string {
    return this.verifyTokenUseCase.execute(token);
  }
}
