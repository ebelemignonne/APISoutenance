import Naissance from "../models/naissances.js"
import naissanceValidation from "../validation/naissanceValidation.js";

// recuperer toutes les objets de la table 
const getAll = (req, res) =>{
    Naissance.findAll({
        attributes: {exclude: ["createdAt", "updatedAt"]}
    })
    .then(naissances =>{
        res.status(200).json(naissances)
    })
.catch((error) => res.status(500).json(error))};

// recuperer un seul objets de la table 
const getOne = (req, res) =>{
    const {id} = req.params
    Naissance.findByPk(id)
    .then(naissance => {
       if(!naissance) return res.status(404).json({msg : "Not found"})
       res.status(200).json(naissance) 
    })
.catch((error) => res.status(500).json(error))

};

// creer un objet de la table 
const createOne = (req, res) =>{
    const {body} = req
        // console.log(body);
    const {error} = naissanceValidation(body)
    if (error) return res.status(401).json(error.details[0].message)

    Naissance.create({...body})
.then(() => {
    res.status(201).json({msg : "Created Ressources"})
})
.catch((error) => res.status(500).json(error))
};

// mise a jour un objet
const updateOne = (req, res) =>{
    const {id} = req.params;
    const {body} = req;

    Naissance.findByPk(id)
    .then(naissance => {
        if(!naissance) return res.status(404).json({msg : "Not found"})

        naissance.nom = body.nom
        naissance.description = body.description

        naissance.save()
        .then(() => res.status(201).json({msg: "Updated Ressource "}))
    .catch((error) => res.status(500).json(error));    })
.catch((error) => res.status(500).json(error))};

// supprimer un objet de la table
const deleteOne = (req, res) =>{
    const {id} = req.params;
    Naissance.destroy({where: {id: id}})
    .then( ressource =>{
        if(ressource == 0) return res.status(404).json({msg : " not found "})
    })
    res.status(200).json({msg : "Deleted Ressource"})
.catch((error) => res.status(500).json(error))};


export {getAll, getOne, createOne, updateOne, deleteOne};