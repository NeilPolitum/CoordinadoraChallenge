import request from 'supertest';
import app from '../../src/index';

describe('Auth API', () => {
  it('should generate a token', async () => {
    const response = await request(app)
      .post('/api/auth/generate-token')
      .send({ username: 'testuser' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should verify a token', async () => {
    const tokenResponse = await request(app)
      .post('/api/auth/generate-token')
      .send({ username: 'testuser' });
    const token = tokenResponse.body.token;

    const response = await request(app)
      .get('/api/auth/verify-token')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('decoded');
  });
});
