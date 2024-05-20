import { Injectable } from '@angular/core';
import { take } from 'rxjs';

import { HasStore } from '../../../../../../base/core/has-store';
import { Beer } from ' @domaine/beer/model/beer';
import { BeerRepository } from ' @infrastructure/beer/repository/beer.repository';

export type beerSTate = {
  beer: Beer[] | null;
}

@Injectable({
  providedIn: 'root'
})
export class BeerManager extends HasStore<beerSTate> {

  constructor(private readonly beerRepository: BeerRepository) {
    super({ beer: null }, 'beer');
  }

  searchBreweries(query: string) {
    this.beerRepository.searchBeer(query)
      .pipe(take(1))
      .subscribe((beer: Beer[]) => {
        this.store.update((state: beerSTate) => {
          return {
            ...state,
            beer
          };
        });
      });
  }

}
