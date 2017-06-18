export default (sequelize, DataType) => {
  const User = sequelize.define('user', {
    username: {
      type: DataType.STRING,
      comment: 'Username of user.',
    },
    email: {
      type: DataType.STRING,
      comment: 'Email of user',
    },
    password: {
      type: DataType.STRING,
      comment: 'Password of user',
    },
  },
  {
    schema: 'fhir',
    comment: 'User information.',
  });

  User.associate = (models) => {
    // 1 to many with patient
    User.hasMany(models.Patient, {
      foreignKey: 'userId',
    });
  };

  return User;
};
