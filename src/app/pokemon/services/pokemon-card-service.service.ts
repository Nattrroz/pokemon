//Un service es una capa que agregamos para manejar los datos
//Un servicio es un proveedor de datos que mantiene logica de acceso y de negocio
//Los servicios seran consumidos por los componentes, y tendran la responsabilidad de acceder a la informacion y de manipularla

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/Pokemon.interface';

@Injectable({
  providedIn: 'root'  //Euiere decir que el service estara disponible para toda la app
})
export class PokemonCardServiceService {
  private apiURL = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  // getProducts():Observable<Product[]>{  //Un observable es un flujo de datos en el tiempo, representan una coleccion de futuros valores o data
  //   return this.http.get<Product[]>(this.apiURL);   //Esperamos un array de productos, lo que nos devolvera la url
  // }
  getProducts(count:number):Observable<Pokemon>{  //Un observable es un flujo de datos en el tiempo, representan una coleccion de futuros valores o data
    return this.http.get<Pokemon>(`${this.apiURL + count}`);   //Esperamos un array de productos, lo que nos devolvera la url
  }
}
