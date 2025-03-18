import { VerifyTokenUseCase } from '../../src/usecases/VerifyTokenUseCase';
import { GenerateTokenUseCase } from '../../src/usecases/GenerateTokenUseCase';
import { User } from '../../src/domain/entities/User';

describe('VerifyTokenUseCase', () => {
  it('should verify a valid token', () => {
    const generateTokenUseCase = new GenerateTokenUseCase();
    const verifyTokenUseCase = new VerifyTokenUseCase();
    const user = new User(1, 'testuser', '12345');
    const token = generateTokenUseCase.execute(user);
    const decoded = verifyTokenUseCase.execute(token);
    expect(decoded).toHaveProperty('userId', user.id);
    expect(decoded).toHaveProperty('username', user.username);
  });

  it('should throw an error for an invalid token', () => {
    const verifyTokenUseCase = new VerifyTokenUseCase();
    expect(() => verifyTokenUseCase.execute('invalidtoken')).toThrow();
  });
});
