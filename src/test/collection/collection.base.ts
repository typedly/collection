import { AsyncReturn, IterableElement } from '@typedly/data';
// Shape.
import { CollectionShape } from "../../lib";
// Constructor.
import { CollectionAdapterConstructor } from "../../constructor";
// Adapter.
import { CollectionAdapter } from '../../adapter';

export abstract class CollectionBase<
  E,
  T extends Iterable<E>,
  R extends boolean,
  A extends CollectionAdapter<T, E, R>
> implements CollectionShape<T, E, R> {
  public get adapter(): A {
    return this.#adapter;
  }
  public get adapterConstructor(): CollectionAdapterConstructor<A, E, T, R> {
    return this.#adapterConstructor;
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
  #adapterConstructor: CollectionAdapterConstructor<A, E, T, R>;

  constructor(
    adapter: CollectionAdapterConstructor<A, E, T, R>,
    ...elements: E[]
  ) {
    this.#adapter = new adapter(...elements);
    this.#adapterConstructor = adapter;
  }
  public add(...element: E[]): AsyncReturn<R, this> {
    return this.#adapter.add(...element),
      this as AsyncReturn<R, this>;
  }
  public clear(): AsyncReturn<R, this> {
    this.#adapter.clear();
    return this as AsyncReturn<R, this>;
  }
  public delete(...element: E[]): AsyncReturn<R, boolean> {
    const index = (this.#adapter as unknown as E[]).indexOf(element[0]);
    if (index > -1) {
      (this.#adapter as unknown as E[]).splice(index, 1);
      return true as AsyncReturn<R, boolean>;
    }
    return false as AsyncReturn<R, boolean>;
  }
  public destroy(): AsyncReturn<R, this> {
    this.#adapter.destroy();
    return this as AsyncReturn<R, this>;
  }
  public forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): AsyncReturn<R, this> {
    this.#adapter.forEach((element, collection) => callbackfn(element, this), thisArg);
    return this as AsyncReturn<R, this>;
  }
  public getValue(): AsyncReturn<R, T> {
    return this.#adapter.getValue();
  }
  public lock(): this {
    return this;
  }
  public has(element: E): AsyncReturn<R, boolean> {
    return this.#adapter.has(element);
  }
  public setValue(value: T): AsyncReturn<R, this> {
    this.#adapter.setValue(value);
    return this as AsyncReturn<R, this>;
  }
  *[Symbol.iterator](): IterableIterator<IterableElement<T>> {
    yield* this.#adapter[Symbol.iterator]() as IterableIterator<IterableElement<T>>;
  }
}
