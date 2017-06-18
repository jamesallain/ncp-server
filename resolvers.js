export default {
  User: {
    patients: ({ id }, args, { models }) =>
      models.Patient.findAll({
        where: {
          userId: id,
        },
      }),
    nutritionOrders: ({ id }, args, { models }) =>
      models.NutritionOrder.findAll({
        where: {
          userId: id,
        },
      }),
  },
  Patient: {
    nutritionOrders: ({ id }, args, { models }) =>
      models.NutritionOrder.findAll({
        where: {
          patientId: id,
        },
      }),
  },
  PatientsConnection: {
    pageInfo: (root, args, context) => {
      return root;
    },
    totalCount: (root, args, context) => {
      return root;
    },
    edges: (root, args, context) => {
      return root.data.map((patients) => { return patients; });         
    },
    nodes: (root, args, context) => {
      return root;
    },
  },
  PatientsEdge: {
    cursor: (root, args, context) => {
      return context;
    },
    node: (root, args, context) => {
      return root;
    },
  },
  



  NutritionOrder: {
    creator: ({ creatorId }, args, { models }) =>
      models.User.findOne({
        where: {
          id: creatorId,
        },
      }),
  },
  NutritionOrdersConnection: {
    pageInfo: (root, args, context) => {
      return root;
    },
    totalCount: (root, args, context) => {
      return root;
    },
    edges: (root, args, context) => {
      return root.data.map((patients) => { return patients; });         
    },
    nodes: (root, args, context) => {
      return root;
    },
  },
  NutritionOrdersEdge: {
    cursor: (root, args, context) => {
      return context;
    },
    node: (root, args, context) => {
      return root;
    },
  },

  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { username }, { models }) =>
      models.User.findOne({
        where: {
          username,
        },
      }),
    allNutritionOrders: (parent, args, { models }) =>
      models.NutritionOrder.findAll({
        where: {
        },
      }),
    allPatients: (parent, args, { models }) =>
      models.Patient.findAll({
        where: {
        },
      }),
    nutritionorderByNutritionOrderId: (parent, { nutritionOrderId }, { models }) =>
      models.NutritionOrder.findAll({
        where: {
          nutritionOrderId,
        },
      }),
    patientByPatientId: (parent, { patientId }, { models }) =>
      models.Patient.findAll({
        where: {
          patientId,
        },
      }),
   
  },

  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
    updateUser: (parent, { username, newUsername }, { models }) =>
      models.User.update({ username: newUsername }, { where: { username } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
    createPatient: (parent, args, { models }) => models.Patient.create(args),
    createNutritionOrder: (parent, args, { models }) =>
      models.NutritionOrder.create(args),
  },
};
