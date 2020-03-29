const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach( async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.roll();
    await connection.destroy();
  });

  it('shoud be able to create a new ONG', async () => {
    const response =  await request(app)
    .post('/ongs')
    .send({
      name: "APAD2",
      email: "contato@gmail.com",
      whatsapp: "3299999999",
      city: "Volta Grande",
      uf: "MG"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});