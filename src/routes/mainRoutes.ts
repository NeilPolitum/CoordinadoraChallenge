import { Router } from 'express';
import { mainController } from '../controllers/mainController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Main
 *   description: Main routes
 */

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
router.get('/', mainController);

export default router;
