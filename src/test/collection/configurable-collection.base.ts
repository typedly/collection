import { AsyncReturn } from '@typedly/data';

import { CollectionAdapter, CollectionSettings, CollectionShape } from "../../lib";
import { ConfigurableCollectionAdapterConstructor } from "../../constructor";

export abstract class ConfigurableCollectionBase<
  E,
  T,
  R extends boolean,
  C extends CollectionSettings<E, T, R>,
  A extends CollectionAdapter<E, T, R>
> implements CollectionShape<E, T, R> {
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
    adapter: ConfigurableCollectionAdapterConstructor<E, T, C, A>,
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
  public forEach(callbackfn: (element: E, element2: E, collection: CollectionShape<E, T, R>) => void, thisArg?: any): AsyncReturn<R, this> {
    this.#adapter.forEach(callbackfn);
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
}
