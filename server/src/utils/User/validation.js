const Joi = require("joi");

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .min(3) 
            .required(),
        lastName: Joi.string()
            .min(2) 
            .required(),
        userName: Joi.string()
            .min(4)
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

// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .email(),
        userName: Joi.string()
            .min(4) ,
                
        password: Joi.string()
            .min(6)
            .required(),
    });
    const Validation = schema.validate(data);
    return Validation;
}



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;