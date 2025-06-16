import express, { Request, Response } from "express";
import { PokemonService } from "../services/pokemon.service";

const pokemonRouter = express.Router();

const pokemonService = new PokemonService();

pokemonRouter.get("/", async (req: Request, res: Response) => {
  const response = await pokemonService.fetchPokemon();
  res.json(response);
});

export default pokemonRouter;
