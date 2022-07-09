const Joi = require("joi");

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3) 
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
    });
  const Validation = schema.validate(data);
  return Validation;
}

modules.exports.registerValidation = registerValidation;