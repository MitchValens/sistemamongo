import express from 'express';
import {createMovie} from "../controllers/create.js";
import {updateMovieByName} from "../controllers/update.js"
import {getMoviebyCode} from "../controllers/read.js"
import {deleteMoviebyCode} from "../controllers/delete.js"

const movieRouter = express.Router();

movieRouter.post("/create", createMovie);
movieRouter.get("/read/:code",getMoviebyCode);
movieRouter.put("/update/:code",updateMovieByName);
movieRouter.delete("/delete/:code", deleteMoviebyCode);

export default movieRouter;