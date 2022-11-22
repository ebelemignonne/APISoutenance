import { Router } from "express";
import {createOneInscript, deleteOneInscript, getAllInscript, getOneInscript, updateOneInscript} from "../controllers/inscription.js";


const routeInscript = Router();

routeInscript.get("/getAllInscript", getAllInscript);
routeInscript.get("/getOneInscript/:id_inscription", getOneInscript);
routeInscript.post("/createOneInscript", createOneInscript);
routeInscript.put("/updateOneInscript/:id_inscription", updateOneInscript);
routeInscript.delete("/deleteOneInscript/:id_inscription", deleteOneInscript);

export default routeInscript