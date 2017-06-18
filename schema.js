export default `

  type NutritionOrder {
    id: Int!
    text: String!
    creator: User!
  }

  type Patient {
    id: Int!
    name: String!
    nutritionorders: [NutritionOrder!]!
    owner: Int!
  }

  type User {
    id: Int!
    username: String!
    createdAt: String!
    updatedAt: String! 
    patients: [Patient!]!
    nutritionorders: [NutritionOrder!]!
  }

  type Query {
    allUsers: [User!]!
    getUser(username: String!): User
    userPatients(owner: String!): [Patient!]!
    userNutritionOrders(creatorId: String!): [NutritionOrder!]!
  }

  type Mutation {
    createUser(username: String!): User
    updateUser(username: String!, newUsername: String!): [Int!]!
    deleteUser(username: String!): Int!
    createPatient(owner: Int!, name: String): Patient!
    createNutritionOrder(creatorId: Int!, text: String, patientId: Int!): NutritionOrder!
  }
`;
