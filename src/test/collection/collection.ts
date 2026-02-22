import { CollectionAdapter } from "../../lib";
import { CollectionAdapterConstructor } from "../../constructor";
import { CollectionBase } from './collection.base';

// 
export class Collection<
  A extends CollectionAdapter<E, T, R>,
  E = A extends CollectionAdapter<infer E, any, any> ? E : unknown,
  T = A extends CollectionAdapter<E, infer T, any> ? T : unknown,
  R extends boolean = A extends CollectionAdapter<E, any, infer R> ? R : false,
> extends CollectionBase<E, T, R, A> {
  constructor(
    adapter: CollectionAdapterConstructor<E, T, R, A>,
    ...elements: E[]
  ) {
    super(adapter, ...elements);
  }

  public setAsync(async: R) {
    this.adapter.setAsync?.(async);
    return this;
  }

  public with<
    Async extends R,
    A extends CollectionAdapter<E, T, Async>
  >(async: Async): Collection<A, E, T, Async> {
    return new Collection<A, E, T, Async>(
      this.#getAdapterConstructor<Async, A>(),
      ...Array.from(this.adapter.value as any) as E[]
    );
  }

  #getAdapterConstructor<Async extends R, A extends CollectionAdapter<E, T, Async>>(): CollectionAdapterConstructor<E, T, Async, A> {
    return super.adapterConstructor as unknown as CollectionAdapterConstructor<E, T, Async, A>;
  }
}
