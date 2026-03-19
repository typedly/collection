import type { AsyncReturn, IterValue } from "@typedly/data";

import type { CollectionAdapterConstructor, CollectionAdapter, CollectionShape } from '../../lib';

export class ModeCollection<
  A extends CollectionAdapter<T, E, R>,
  E,
  T extends Iterable<E>,
  R extends boolean
> implements CollectionShape<T, E, R> {
  public get [Symbol.toStringTag](): string {
    return 'ModeCollection';
  }

  public get async(): R {
    return this.#adapter.async;
  }

  public get size(): number {
    return this.#adapter.size;
  }

  public get value(): T {
    return this.#adapter.value;
  }

  #adapter: A;
  #type: CollectionAdapterConstructor<A, E, T, R>;

  constructor(
    async: R,
    adapter: CollectionAdapterConstructor<A, E, T, R>,
    ...elements: E[]
  ) {
    this.#adapter = new adapter(...elements);
    this.#type = adapter;
  }

  public add(element: E): AsyncReturn<R, this> {
    // (this.#value as any).add(element);
    this.#adapter.add(element);
    return this as AsyncReturn<R, this>;
  }
  public clear(): AsyncReturn<R, this> {
    this.#adapter.clear();
    return this as AsyncReturn<R, this>;
  }
  public delete(element: E): AsyncReturn<R, boolean> {
    return this.#adapter.delete(element);
  }

  public destroy(): AsyncReturn<R, this> {
    this.#adapter.destroy();
    return this as AsyncReturn<R, this>;
  }
  public lock(): this {
    this.#adapter.lock();
    return this;
  }
  public getValue(): AsyncReturn<R, T> {
    return this.#adapter.getValue();
  }
  public has(element: E): AsyncReturn<R, boolean> {
    return this.#adapter.has(element);
  }
  public forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): AsyncReturn<R, this> {
    this.#adapter.forEach((value: E) => callbackfn.call(thisArg, value, this));
    return this as AsyncReturn<R, this>;
  }
  public setValue(value: T): AsyncReturn<R, this> {
    this.#adapter.setValue(value);
    return this as AsyncReturn<R, this>;
  }
  public unlock(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }

  public with<
    Async extends R,
    A extends CollectionAdapter<T, E, Async>
  >(async: Async): ModeCollection<A, E, T, Async> {
    return new ModeCollection<A, E, T, Async>(
      async,
      this.#getAdapterConstructor<Async, A>(),
      ...[]
    );
  }

  #getAdapterConstructor<Async extends R, A extends CollectionAdapter<T, E, Async>>(): CollectionAdapterConstructor<A, E, T, Async> {
    return this.#type as unknown as CollectionAdapterConstructor<A, E, T, Async>;
  }

  [Symbol.iterator](): IterableIterator<IterValue<T>> {
    return this.#adapter[Symbol.iterator]!();
  }
}
