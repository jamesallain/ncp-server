export default (sequelize, DataType) => {
  const NutritionOrder = sequelize.define('nutrition_order', {
    nutritionOrderId: {
      type: DataType.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      field: 'nutrition_order_id',
    },
    patientId: {
      type: DataType.STRING,
      comment: 'http://hl7.org/fhir/json-schema/NutritionOrder',
    },
    id: {
      type: DataType.STRING,
      comment: 'http://hl7.org/fhir/json-schema/NutritionOrder',
    },
    identifier: {
      type: DataType.JSON,
      comment: 'Identifiers assigned to this order by the order sender or by the order receiver.',
    },
    status: {
      type: DataType.STRING,
      comment: 'The workflow status of the nutrition order/request.',
    },
    patients: {
      type: DataType.JSON,
      comment: 'The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.',
    },
    encounters: {
      type: DataType.JSON,
      comment: 'An encounter that provides additional information about the healthcare context in which this request is made.',
    },
    dateTime: {
      type: DataType.STRING,
      comment: 'The date and time that this nutrition order was requested.',
      field: 'date_time',
    },
    allergyIntolerances: {
      type: DataType.JSON,
      comment: 'A link to a record of allergies or intolerances  which should be included in the nutrition order.',
      field: 'allergy_intolerance',
    },
    foodPerferenceModifier: {
      type: DataType.JSON,
      comment: 'This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.',
      field: 'food_perference_modifier',
    },
    excludeFoodModifier: {
      type: DataType.JSON,
      comment: 'This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.',
      field: 'exclude_food_modifier',
    },
    oralDiet: {
      type: DataType.JSON,
      comment: 'Diet given orally in contrast to enteral (tube) feeding.',
      field: 'oral_diet',
    },
    supplement: {
      type: DataType.JSON,
      comment: 'Oral nutritional products given in order to add further nutritional value to the patient\u0027s diet.',
      field: 'multiplebirth',
    },
    enteralFormula: {
      type: DataType.JSON,
      comment: 'Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.',
      field: 'enteral_formula',
    },
    createdAt: {
      type: DataType.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataType.DATE,
      field: 'updated_at',
    },
  },
  {
    comment: 'A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.',
    schema: 'fhir',
  });

  return NutritionOrder;
};
