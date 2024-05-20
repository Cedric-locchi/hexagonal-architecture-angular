import { Injectable } from '@angular/core';
import { DTO_beer } from '../types/DTO_beer';
import { Beer } from '../../../domaine/beer/model/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerAdapter {

  adapt(data: DTO_beer): Beer {
    return new Beer({ ...data });
  }

}
