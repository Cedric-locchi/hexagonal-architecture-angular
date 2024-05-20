import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from ' @domaine/beer/model/beer';
import { BeerManager } from './manager/beer/beer.manager';
import { select } from '@ngneat/elf';
import { tap } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="brewerie" placeholder="rechercher une brasserie" />
      <button (click)="searchBeer()">Rechercher</button>
    </form>

    @for (item of breweries; track item.id) {
      <pre>{{ item | json }}</pre>
    }

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit{

  breweries: Beer[] = [];
  form: FormGroup = new FormGroup({
    brewerie: new FormControl('', [])
  });


  constructor(private readonly beerManager: BeerManager) {

  }

  searchBeer() {
    this.beerManager.searchBreweries(this.form.value.brewerie);
  }

  ngOnInit() {
    this.beerManager.store
      .pipe(
        select(state => state.beer),
        tap((beer: Beer[] | null) => {
          if(beer) {
            this.breweries = beer;
          }
        })
        )
      .subscribe()
  }

}
