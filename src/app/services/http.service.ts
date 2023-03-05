import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeApiResponse } from '../models/pokeapiResponse.model';
import { PokemonTrainer } from '../models/pokemonTrainer.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  trainerBaseApiURL =
    'https://json-server-assingment-api-production.up.railway.app/trainers';
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=30'
    );
  }

  getPaginatedPokemons(apiUrl: string): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(apiUrl);
  }

  getTrainerAndPokemonsByName(userName: string) {
    return this.http.get<PokemonTrainer[]>(
      this.trainerBaseApiURL + '?username=' + userName
    );
  }

  updatePokemonToTrainerCollection(
    id: number,
    pokemons: Pokemon[]
  ): Observable<PokemonTrainer> {
    return this.http.patch<PokemonTrainer>(this.trainerBaseApiURL + '/' + id, {
      pokemons,
    });
  }

  saveTrainer(trainer: PokemonTrainer): Observable<PokemonTrainer> {
    return this.http.post<PokemonTrainer>(this.trainerBaseApiURL, trainer);
  }

  fetchPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
