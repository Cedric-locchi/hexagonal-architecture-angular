import { createStore, withProps } from '@ngneat/elf';

export abstract class HasStore<P> {
  protected constructor(
    private propsValues: P,
    private name: string,
  ) {}

  store = createStore({ name: this.name }, withProps<P>(this.propsValues));
}
