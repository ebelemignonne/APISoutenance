import  express  from "express";

import routes from "./routes/routes.js";
import routeInscript from "./routes/routeInscript.js";


import Db from "./db/db.js";
const app = express();

app.use(express.json());
app.use(routes);
app.use(routeInscript);

Db.sync()
.then(() => console.log("Connection a la base de donnees"))
.catch((error) => console.log(error))
app.listen(8000, () => console.log("Port 8000"));