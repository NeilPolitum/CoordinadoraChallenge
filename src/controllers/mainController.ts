import { Request, Response } from 'express';
import redisClient from '../config/redisClient';

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a test message
 *     tags: [Main]
 *     responses:
 *       200:
 *         description: Test message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Shipping management API working correctly
 *       500:
 *         description: Server error
 */
export const mainController = async (req: Request, res: Response): Promise<void> => {
  try {
    await redisClient.set('test', 'Shipping management API working correctly');
    const message = await redisClient.get('test');
    res.send(message);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('Unknown error');
    }
  }
};
