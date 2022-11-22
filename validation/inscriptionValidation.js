import Joi from "joi";

const inscriptionValidation = (body) => {
   const InscriptionSchema = Joi.object({
        Nom : Joi.string().min(3).max(40).trim().required(),
        Prenom : Joi.string().min(3).max(30).trim().required(),
        Tel : Joi.number().required(),
        Email : Joi.string().min(10).max(50).trim().required(),
        Password : Joi.string().min(8).max(16).trim().required()
    })

     return InscriptionSchema.validate(body)
}


export default inscriptionValidation