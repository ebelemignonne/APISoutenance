import Inscription from "../models/inscription.js"
import inscriptionValidation from "../validation/inscriptionValidation.js";

// recuperer toutes les objets de la table 
const getAllInscript = (req, res) =>{
    Inscription.findAll({
        attributes: {exclude: ["createdAt", "updatedAt"]}
    })
    .then(inscription =>{
        res.status(210).json(inscription)
    })
.catch((error) => res.status(500).json(error))}
// recuperer un seul objets de la table 
const getOneInscript = (req, res) =>{
    const {id_inscription} = req.params
    Inscription.findByPk(id_inscription)
    .then(inscription => {
       if(!inscription) return res.status(414).json({msg : "Not found"})
       res.status(210).json(inscription) 
    })
    .catch((error) => res.status(510).json(error))
};

// creer un objet de la table 
const createOneInscript = (req, res) =>{
    const {body} = req
        // console.log(body);
    const {error} = inscriptionValidation(body)
    if (error) return res.status(411).json(error.details[0].message)

    Inscription.create({...body})
.then(() => {
    res.status(211).json({msg : "Created Ressources"})
})
.catch(error => res(510).json(error))
};

// mise a jour un objet
const updateOneInscript = (req, res) =>{
    const {id_inscription} = req.params;
    const {body} = req;

    Inscription.findByPk(id_inscription)
    .then(inscription => {
        if(!inscription) return res.status(414).json({msg : "Not found"})

        inscription.Nom = body.Nom
        inscription.Prenom = body.Prenom
        inscription.Tel = body.Tel
        inscription.Email = body.Email
        inscription.Password = body.Password

        inscription.save()
        .then(() => res.status(211).json({msg: "Updated Ressource "}))
    .catch((error) => res.status(510).json(error))    })
.catch((error) => res.status(510).json(error))
}
// supprimer un objet de la table
const deleteOneInscript = (req, res) =>{
    const {id_inscription} = req.params;
    Inscription.destroy({where: {id_inscription: id_inscription}})
    .then( ressource =>{
        if(ressource == 0) return res.status(414).json({msg : " not found "})
    })
    res.status(210).json({msg : "Deleted Ressource"})
.catch((error) => res.status(500).json(error))}

export {getAllInscript, getOneInscript, createOneInscript, updateOneInscript, deleteOneInscript};