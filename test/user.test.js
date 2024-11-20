import request from 'supertest';
import { app } from '../index';

const token = 'Bearer *****************';

describe('GET /api/v1/users/:userId/recentlyViewed', () => {
  it('should return recently viewed products', async () => {
    const response = await request(app)
      .get('/api/v1/users/********/recentlyViewed')
      .set('Authorization', token);

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});