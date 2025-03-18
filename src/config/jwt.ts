import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

if (!secret) {
  throw new Error('JWT_SECRET is not defined in the .env file');
}

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): object | string => {
  return jwt.verify(token, secret);
};
