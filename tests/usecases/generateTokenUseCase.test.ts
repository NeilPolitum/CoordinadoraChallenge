import { GenerateTokenUseCase } from '../../src/usecases/GenerateTokenUseCase';
import { User } from '../../src/domain/entities/User';

describe('GenerateTokenUseCase', () => {
  it('should generate a token for a user', () => {
    const generateTokenUseCase = new GenerateTokenUseCase();
    const user = new User(1, 'testuser', '12345');
    const token = generateTokenUseCase.execute(user);
    expect(token).toBeDefined();
  });
});
