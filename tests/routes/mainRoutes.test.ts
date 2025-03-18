import request from 'supertest';
import app from '../../src/index';

describe('Main API', () => {
  it('should return a message', async () => {
    const response = await request(app).get('/api/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Shipping management API working correctly');
  });
});
