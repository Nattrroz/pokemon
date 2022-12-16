import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Pokemon } from './pokemon/interfaces/Pokemon.interface';
import { PokemonCardServiceService } from './pokemon/services/pokemon-card-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;
  pokemon!:Pokemon;

  constructor(private productSvc: PokemonCardServiceService){
    this.contador = 10;
  }
  ngOnInit(): void {
  }

  incrementar(){
    this.contador++;
    this.productSvc.getProducts(this.contador).pipe(tap((pokemon:Pokemon) => this.pokemon = pokemon)).subscribe();

  }

  decrementar(){
    this.contador--;
    this.productSvc.getProducts(this.contador).pipe(tap((pokemon:Pokemon) => this.pokemon = pokemon)).subscribe();

  }
}
