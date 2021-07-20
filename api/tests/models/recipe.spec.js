const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('title', () => {
      it('should throw an error if title  is null', async () => {
        try {
          await Recipe.create({ summary: "resumen" });
        } catch (err) {
          expect(err.message).to.equal(
            "notNull Violation: Recipe.title cannot be null",

          );
        }
      });
    });
    describe('Summary', () => {
      it('You shouldnt create a Recipe if the data input is an integer where an string must be', async () => {
        try {
          await Pokemon.create({
            title: 'Ttile',
            summary: 15,
          });
        } catch (err) { }
        const recipe = await Recipe.findOne({
          where: {
            title: 'Title',
          },
        });
        expect(recipe).to.equal(null);
      });
    });
    describe('Create a new Recipe', () => {
      describe('new Recipe', () => {
        it('should create a new recipe correctly', async () => {
          await Recipe.create({ title: 'New recipe', summary: "summary summary" });
          const newRecipe = await Recipe.findOne({
            where: {
              title: 'New recipe',
            },
          });
          expect(newRecipe.title).to.equal('New recipe');
          expect(newRecipe.summary).to.equal("summary summary");
        });
      });
    });

  });
});


//HOOKS(chai)

//BEFORE: SE EJECUTA UNA UNICA VEZ , BEFORE TODOS LOS TEST EJECUTO TAL COSA


//beforeEach :se ejecuta despues de cada uno de los test  // afterEach::se ejecuta antes de cada uno de los test

//equal
//deepEqual 