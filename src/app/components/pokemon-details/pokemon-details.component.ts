import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from 'src/app/models/pokemon.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() count!: number;
  pokemonDetails!: Pokemon;
  showPokemonDetails: boolean = false;
  counter: number = 0;
  moves: string[] = [];
  types: string[] = [];
  stats: string[] = [];
  abilities: string[] = [];

  constructor(private http: HttpService,private toastr: ToastrService) {}

  ngOnInit(): void {

  }

  onClick(): void {
    if (!this.pokemonDetails) {
      this.fetchPokemonDetails();
    }
    this.showPokemonDetails=!this.showPokemonDetails;
  }

  fetchPokemonDetails(): void {
    this.http.fetchPokemonDetails(this.pokemon.url).subscribe({
      next: (data: Pokemon) => {
        this.types = data.types.slice(0, 3).map((type) => type.type.name);

        this.moves = data.moves.slice(0, 3).map((move) => move.move.name);
        this.stats = data.stats.slice(0, 3).map((stat) => stat.stat.name);
        this.abilities = data.abilities.slice(0, 3).map((ability) => ability.ability.name);
        this.pokemonDetails = data;
      },
      error: (error: any) => {
        this.toastr.error(error.message);
      },
    });
  }
}
