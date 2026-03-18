import { AsyncReturn, IterableElement } from '@typedly/data';

import { CollectionAdapter } from '../../adapter';
import { CollectionSettings, ConfigurableCollectionShape } from "../../lib";
import { ConfigurableCollectionAdapterConstructor } from "../../constructor";

export abstract class ConfigurableCollectionBase<
  E,
  T extends Iterable<E>,
  R extends boolean,
  C extends CollectionSettings<T, E, R>,
  A extends CollectionAdapter<T, E, R>
> implements ConfigurableCollectionShape<C, T, E, R> {
  public get adapter(): A {
    return this.#adapter;
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
  constructor(
    settings: C,
    adapter: ConfigurableCollectionAdapterConstructor<A, C, T, E, R>,
    ...elements: E[]
  ) {
    this.#adapter = new adapter(settings, ...elements);
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
  public has(element: E): AsyncReturn<R, boolean> {
    return this.#adapter.has(element);
  }
  public setValue(value: T): AsyncReturn<R, this> {
    this.#adapter.setValue(value);
    return this as AsyncReturn<R, this>;
  }
  public lock(): this {
    return this;
  }
  [Symbol.iterator](): IterableIterator<IterableElement<T>> {
    return this.#adapter[Symbol.iterator]();
  }
}
