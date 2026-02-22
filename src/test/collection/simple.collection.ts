
import { CollectionAdapterConstructor } from "../../constructor/lib";
import { CollectionAdapter } from "../../lib";

import { CollectionBase } from './collection.base';

// All generic are captured from the adapter constructor.
export class SimpleCollection<
  E,
  T,
  R extends boolean = false,
  A extends CollectionAdapter<E, T, R> = CollectionAdapter<E, T, R>,
> extends CollectionBase<E, T, R, A> {
  constructor(
    adapter: CollectionAdapterConstructor<E, T, R, A>,
    ...elements: E[]
  ) {
    super(adapter, ...elements);
  }
}
