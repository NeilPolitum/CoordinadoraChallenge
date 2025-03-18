import { Router } from 'express';
import { generateTokenController, verifyTokenController } from '../controllers/authController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication routes
 */

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
router.post('/generate-token', generateTokenController);

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
router.get('/verify-token', verifyTokenController);

export default router;
