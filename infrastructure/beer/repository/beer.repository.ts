import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DTO_beer } from '../types/DTO_beer';
import { map, Observable } from 'rxjs';
import { BeerAdapter } from '../adapter/beer.adapter';
import { Beer } from '../../../domaine/beer/model/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerRepository {

  constructor(private readonly http: HttpClient,
              private readonly adapter: BeerAdapter) {
  }

  searchBeer(term: string): Observable<Beer[]> {
    return this.http.get<DTO_beer[]>(`https://api.openbrewerydb.org/v1/breweries/search?query=${term}`)
      .pipe(map((beers: DTO_beer[]) => beers.map((beer)=> this.adapter.adapt(beer))));
  }

}
