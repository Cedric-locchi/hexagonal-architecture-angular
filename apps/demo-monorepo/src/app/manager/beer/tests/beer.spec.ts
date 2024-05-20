import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DTO_mockBeer } from '../mocks/DTO_mock.beer';
import { of } from 'rxjs';
import { select } from '@ngneat/elf';
import { BeerManager, beerSTate } from '../beer.manager';
import { BeerRepository } from ' @infrastructure/beer/repository/beer.repository';
import { BeerAdapter } from ' @infrastructure/beer/adapter/beer.adapter';
import { Beer } from ' @domaine/beer/model/beer';

describe('Beer', () => {

  let beerManager: BeerManager;
  let beerRepository: BeerRepository;
  let beerAdapter: BeerAdapter;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BeerManager,
        BeerAdapter,
        BeerRepository
      ]
    });

    beerManager = TestBed.inject(BeerManager);
    beerRepository = TestBed.inject(BeerRepository);
    beerAdapter = TestBed.inject(BeerAdapter);

  });

  it('beer should be defined', fakeAsync(()=>{
    jest.spyOn(beerRepository, 'searchBeer').mockReturnValue(of(DTO_mockBeer.map((beer) => beerAdapter.adapt(beer))));
    beerManager.searchBreweries('test');

    beerManager.store
      .pipe(select((state: beerSTate) => state.beer))
      .subscribe((beers: Beer[] | null) => {
        expect(beers).toBeDefined();
        expect(beers?.length).toEqual(3);
      })

  }))

})
