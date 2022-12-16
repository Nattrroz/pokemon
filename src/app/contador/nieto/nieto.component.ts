import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
})
export class NietoComponent implements OnInit {

  constructor() { }
 @Input() contador: number = 0;
 @Output() cambioContador = new EventEmitter<number>();

  ngOnInit(): void {
  }

  reset(){
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
