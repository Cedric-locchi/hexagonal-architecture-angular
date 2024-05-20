import { beer } from '../type/beer';

export class Beer {

  private _id: string;
  private _name: string;
  private _brewery_type: string;
  private _city: string;
  private _country: string;
  private _longitude: string;
  private _latitude: string;
  private _phone: string;
  private _state: string;

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get latitude(): string {
    return this._latitude;
  }

  set latitude(value: string) {
    this._latitude = value;
  }

  get longitude(): string {
    return this._longitude;
  }

  set longitude(value: string) {
    this._longitude = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get brewery_type(): string {
    return this._brewery_type;
  }

  set brewery_type(value: string) {
    this._brewery_type = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  constructor(data: beer) {
    this._id = data.id;
    this._name = data.name;
    this._brewery_type = data.brewery_type;
    this._city = data.city;
    this._country = data.country;
    this._longitude = data.longitude;
    this._latitude = data.latitude;
    this._phone = data.phone;
    this._state = data.state;
  }

  asObject(): beer {
    return {
      id: this._id,
      name: this._name,
      brewery_type: this._brewery_type,
      city: this._city,
      country: this._country,
      longitude: this._longitude,
      latitude: this._latitude,
      phone: this._phone,
      state: this._state,
    };
  }

}
