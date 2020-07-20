import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pokes {
  'name': string;
  'id': number;
  'base_experience': number;
}

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private url = 'https://pokeapi.co/api/v2/pokemon/123';

  constructor(private httpCli: HttpClient) { }

  retrievePokemon(): Observable<string> {
    return this.httpCli.get<string>(this.url);
  }


  retrievePokemon2(): Observable<Pokes> {
    return this.httpCli.get<Pokes>(this.url);
  }
}
