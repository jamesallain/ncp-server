export default (sequelize, DataType) => {
  const Patient = sequelize.define('patient', {
    patientId: {
      type: DataType.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      //field: 'patient_id',
    },
    id: {
      type: DataType.STRING,
      comment: 'http://hl7.org/fhir/json-schema/Patient',
    },
    identifier: {
      type: DataType.JSON,
      comment: 'An identifier for this patient.',
    },
    active: {
      type: DataType.BOOLEAN,
      comment: 'Whether this patient record is in active use.',
    },
    name: {
      type: DataType.JSON,
      comment: 'A name associated with the individual.',
    },
    telecom: {
      type: DataType.JSON,
      comment: 'A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.',
    },
    gender: {
      type: DataType.STRING,
      comment: 'Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.',
    },
    birthDate: {
      type: DataType.STRING,
      comment: 'The date of birth for the individual.',
      field: 'birth_date',
    },
    deceasedBolean: {
      type: DataType.BOOLEAN,
      comment: 'Indicates if the individual is deceased or not.',
      field: 'deceased_boolean',
    },
    deceasedDateTime: {
      type: DataType.STRING,
      comment: 'Indicates if the individual is deceased or not.',
      field: 'deceased_date_time',
    },
    address: {
      type: DataType.JSON,
      comment: 'Addresses for the individual.',
    },
    maritalStatus: {
      type: DataType.STRING,
      comment: 'This field contains a patient\u0027s most recent marital (civil) status.',
      field: 'marital_status',
    },
    multipleBirthBoolean: {
      type: DataType.BOOLEAN,
      comment: 'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).',
      field: 'multiple_birth_boolean',
    },
    multipleBirthInteger: {
      type: DataType.INTEGER,
      comment: 'Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer).',
      field: 'multiple_birth_integer',
    },
    photo: {
      type: DataType.JSON,
      comment: 'Image of the patient.',
    },
    contact: {
      type: DataType.JSON,
      comment: 'A contact party (e.g. guardian, partner, friend) for the patient.',
    },
    animal: {
      type: DataType.JSON,
      comment: 'This patient is known to be an animal.',
    },
    communication: {
      type: DataType.JSON,
      comment: 'Languages which may be used to communicate with the patient about his or her health.',
    },
    generalPractioner: {
      type: DataType.JSON,
      comment: 'Patient\u0027s nominated care provider.',
      field: 'general_practitioner',
    },
    managingOrganization: {
      type: DataType.JSON,
      comment: 'Organization that is the custodian of the patient record.',
      field: 'managing_organization',
    },
    link: {
      type: DataType.JSON,
      comment: 'Link to another patient resource that concerns the same actual patient.',
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
    schema: 'fhir',
    comment: 'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
  });

  Patient.associate = (models) => {
    //1 to many with patient
    // Patient.hasMany(models.NutritionOrder, {
    //   foreignKey: 'patientId',
    // });
  };

  return Patient;
};
