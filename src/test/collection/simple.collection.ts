
import { CollectionAdapter, CollectionAdapterConstructor } from "../../lib";
import { CollectionBase } from './collection.base';

// All generic are captured from the adapter constructor.
export class SimpleCollection<
  E,
  T extends Iterable<E>,
  R extends boolean = false,
  A extends CollectionAdapter<T, E, R> = CollectionAdapter<T, E, R>,
> extends CollectionBase<E, T, R, A> {
  constructor(
    adapter: CollectionAdapterConstructor<A, E, T, R>,
    ...elements: E[]
  ) {
    super(adapter, ...elements);
  }
}
