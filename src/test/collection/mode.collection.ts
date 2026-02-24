import { AsyncReturn, IterValue } from "@typedly/data";
import { CollectionAdapter, CollectionShape } from "../../lib";
import { CollectionAdapterConstructor } from "../../public-api";

export class ModeCollection<
  A extends CollectionAdapter<E, T, R>,
  E = A extends CollectionAdapter<infer E, any, any> ? E : unknown,
  T = A extends CollectionAdapter<any, infer T, any> ? T : unknown,
  R extends boolean = A extends CollectionAdapter<any, any, infer R> ? R : unknown
> implements CollectionShape<
  E,
  T,
  R
> {
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
  #type: CollectionAdapterConstructor<E, T, R, A>;

  constructor(
    async: R,
    adapter: CollectionAdapterConstructor<E, T, R, A>,
    ...elements: E[]
  ) {
    this.#adapter = new adapter(...elements);
    this.#type = adapter;
    this.#adapter.setAsync?.(async);
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
  public forEach(callbackfn: (element: E, element2: E, collection: ModeCollection<A, E, T, R>) => void, thisArg?: any): AsyncReturn<R, this> {
    this.#adapter.forEach((value: E) => callbackfn.call(thisArg, value, value, this));
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
    A extends CollectionAdapter<E, T, Async>
  >(async: Async): ModeCollection<A, E, T, Async> {
    return new ModeCollection<A, E, T, Async>(
      async,
      this.#getAdapterConstructor<Async, A>(),
      ...[]
    );
  }

  #getAdapterConstructor<Async extends R, A extends CollectionAdapter<E, T, Async>>(): CollectionAdapterConstructor<E, T, Async, A> {
    return this.#type as unknown as CollectionAdapterConstructor<E, T, Async, A>;
  }

  [Symbol.iterator](): IterableIterator<IterValue<T>> {
    return this.#adapter[Symbol.iterator]!();
  }
}
