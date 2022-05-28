import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ProductsModule } from '../src/products/products.module';

describe('ProductsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProductsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect([{ id: 1, name: 'test', description: 'hello world', quantity: 20 }]);
  });

  it('/products/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/products/1')
      .expect(200)
      .expect({ id: 1, name: 'test', description: 'hello world', quantity: 20 });
  });

  it('/products (POST)', () => {
    return request(app.getHttpServer())
      .post('/products')
      .send({
        name: 'john',
        description: 'test',
        quantity: 15,
      })
      .expect(201);
  });

  it('/products (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/products/1')
      .send({
        description: 'test',
      })
      .expect(200);
  });

  it('/products (DELETE)', () => {
    return request(app.getHttpServer()).delete('/products/1').expect(200);
  });
});
