import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush //change detection, es el mecanismo o estrategia que usa angular para saber cuando debe actualizar un componente o vista
})
export class PokemonCardComponent implements OnInit {
  @Input ()character!: Pokemon; //comunicacion de padre a hijo
  @Output ()adition = new EventEmitter<Pokemon>(); //comunicacion de hijo a padre

  constructor() { }

  ngOnInit(): void {
    
  }
  onClick():void{
    this.adition.emit(this.character)   //pasamos como parametro el mismo valor que recibimos del padre
  }

}
