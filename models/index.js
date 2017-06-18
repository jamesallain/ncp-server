import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

const db = {
  User: sequelize.import('./user'),
  Patient: sequelize.import('./patient'),
  NutritionOrder: sequelize.import('./nutrition-order'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

db.User.drop();
db.Patient.drop();
db.NutritionOrder.drop();

db.User.sync();
db.Patient.sync();
db.NutritionOrder.sync();

export default db;
