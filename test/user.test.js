import request from 'supertest';
import { app } from '../index';

describe('GET /api/v1/users/:userId/recentlyViewed', () => {
  it('should return recently viewed products', async () => {
    const response = await request(app)
      .get('/api/v1/users/j3HY04JdAMMWxhshoTQ9Q8vzpxp2/recentlyViewed')
      .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNTIxYmY1ZjdhNDAwOGMzYmQ3MjFmMzk2OTcwOWI1MzY0MzA5NjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVjZW50bHktdmlld2VkLXByb2R1Y3RzLTgxYjA2IiwiYXVkIjoicmVjZW50bHktdmlld2VkLXByb2R1Y3RzLTgxYjA2IiwiYXV0aF90aW1lIjoxNzMyMDEzMzAxLCJ1c2VyX2lkIjoiajNIWTA0SmRBTU1XeGhzaG9UUTlROHZ6cHhwMiIsInN1YiI6ImozSFkwNEpkQU1NV3hoc2hvVFE5UTh2enB4cDIiLCJpYXQiOjE3MzIwMTMzMDEsImV4cCI6MTczMjAxNjkwMSwiZW1haWwiOiJ0ZXN0dXNlckBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0dXNlckBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PmrdTfgrlbQtojUY2ADuELLD82MIkvgGy_UaEFfkVLDiu3Wh9A6BpcU-LiZ4-boJXXETSISKHZ82EFqrkuG6O8k6KfCkjlYM_7Bph-E0PRdGbybq3SD6cyXU1vDBpdhmPbdWDWKGNEp5CY9crwg-HCvhD--M8XRvPhZ2fBI6WT5bxLnA8rMa91WNoAfMfgDbF0oVLnwLY3aPIn36zPPJ0p1-UWpVciF2rU4v4xhVq7tXwifRmHsCrLZIQXnGrbhlv7cNHyE8j9fuqSij48qAQhMwQMocyw0zxGXKR7SHY2kxQYIkiXvRekfDUUYDOEcM2F8nXP99DXMx9cqjM42PEQ');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});