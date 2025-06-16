import express from "express";
import pokemonRouter from "./pokemon.controller";

const indexRouter = express.Router();

indexRouter.use("/pokemon", pokemonRouter);

export default indexRouter;
