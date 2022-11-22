import Joi from "joi";

const naissanceValidation = (body) => {
   const NaissanceSchema = Joi.object({
        nom : Joi.string().min(3).max(40).trim().required(),
        description : Joi.string().min(5).max(500),
    })

     return NaissanceSchema.validate(body)
}


export default naissanceValidation