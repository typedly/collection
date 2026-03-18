import { CollectionAdapter } from "../../adapter";
import { CollectionAdapterConstructor } from "../../constructor";
import { InferElement } from "../../inference/lib";
import { CollectionBase } from './collection.base';
// 
export class Collection<
  A extends CollectionAdapter<T, E, R>,
  E = InferElement<A>,
  T extends Iterable<E> = A extends CollectionAdapter<infer T, E, any> ? T : unknown,
  R extends boolean = A extends CollectionAdapter<T, E, infer R> ? R : false,
> extends CollectionBase<E, T, R, A> {
  constructor(
    adapter: CollectionAdapterConstructor<A, E, T, R>,
    ...elements: E[]
  ) {
    super(adapter, ...elements);
  }

  public setAsync(async: R) {
    return this;
  }

  public with<
    Async extends R,
    A extends CollectionAdapter<T, E, Async>
  >(async: Async): Collection<A, E, T, Async> {
    return new Collection<A, E, T, Async>(
      this.#getAdapterConstructor<Async, A>(),
      ...Array.from(this.adapter.value as any) as E[]
    );
  }

  #getAdapterConstructor<Async extends R, A extends CollectionAdapter<T, E, Async>>(): CollectionAdapterConstructor<A, E, T, Async> {
    return super.adapterConstructor as unknown as CollectionAdapterConstructor<A, E, T, Async>;
  }
}
