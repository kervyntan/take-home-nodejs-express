import axios from "axios";

export class PokemonService {
  // TODO: 2. Make the pagination in this API dynamic i.e. it can take in different values of limit/offset based on the API request
  private API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  async fetchPokemon() {
    // TODO: 3. Add the typing for this response (after seeing the response data)
    const response = await axios.get(this.API_URL);

    return response.data;
  }
}
