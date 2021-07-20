/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);


describe('Recipe routes', () => {
  before(() => conn.authenticate()
  
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Recipe.sync({ force: true }))
  
  describe('GET /recipes', () => {
    it('should get 200', async() =>
    
     await  agent.get('/recipes').expect(200)
    );
    it('responds a array whit 100 recipes', async () => {
      try {
        const res = await agent.get('/recipes');
        expect(res.body).to.have.lengthOf(100);
      } catch (err) {
        console.log(err);
      }
    }).timeout(10000);
    it(' respond with recipes with that query included', async () => {
      try {
        const res = await agent.get('/recipes?name=Chicken');
        expect(res.body[0].title).to.deep.include('Chicken');
      } catch (err) { }
    }).timeout(10000);

    it('If an id parameter is passed it must return the recipe associated with that id', async () => {
      try {
        const res = await agent.get('/recipes/1');
        expect(res.body[0].title).to.be.equal('Fried Anchovies with Sage');
      } catch (err) { }
    });
    it('If an id parameter is passed invalid,respond with a 404', async () => {
      try {
        const res = await agent.get('/recipes/44d45s26');
        expect(res).res(404);
      } catch (err) { }
    })

  });
describe('GET /types',()=>{
  
    it('should get diets types 200', async() =>
    
     await  agent.get('/types').expect(200)
    );
})

  describe('POST /recipes', () => {
  
   
    it('responds with 200', async () => {
      try {
        await agent.post('/recipes').send({
          title: "Ensalada",
          summary: "Tomate y lechuga",
          diet: [2,3]
        }).expect(200);
      } catch (err) {
        console.log(err);
      }
    });
    it('If you dont pass summary,respond with a 404', async () => {
      try {
        await agent.post('/recipes').send({
          title: 'Ensalada',
        
        }).expect(404);
      } catch (err) {
        console.log(err);
      }
    });
   
  });
});
