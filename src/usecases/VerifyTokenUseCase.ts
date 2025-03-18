import { verifyToken } from '../config/jwt';

export class VerifyTokenUseCase {
  execute(token: string): object | string {
    return verifyToken(token);
  }
}
