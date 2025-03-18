import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { UserRepository } from '../infrastructure/repositories/UserRepository';
import { GenerateTokenUseCase } from '../usecases/GenerateTokenUseCase';
import { VerifyTokenUseCase } from '../usecases/VerifyTokenUseCase';

const userRepository = new UserRepository();
const generateTokenUseCase = new GenerateTokenUseCase();
const verifyTokenUseCase = new VerifyTokenUseCase();
const authService = new AuthService(userRepository, generateTokenUseCase, verifyTokenUseCase);

/**
 * @swagger
 * /auth/generate-token:
 *   post:
 *     summary: Generate a token for a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Error generating token
 */
export const generateTokenController = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = await authService.generateToken(req.body.username);
    res.send({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send('Unknown error');
    }
  }
};

/**
 * @swagger
 * /auth/verify-token:
 *   get:
 *     summary: Verify a token
 *     tags: [Auth]
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer <token>
 *     responses:
 *       200:
 *         description: Token verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 decoded:
 *                   type: object
 *       401:
 *         description: Invalid or not provided token
 */
export const verifyTokenController = (req: Request, res: Response): void => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).send('Token not provided');
    return;
  }

  try {
    const decoded = authService.verifyToken(token);
    res.send({ decoded });
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};
