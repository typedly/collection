import { AsyncReturn, IterValue } from '@typedly/data';
import { CollectionAdapter } from "../../adapter";
import { CollectionSettings } from "../../lib";

export class ConfigurableSetCollectionAdapter<
  E,
  T extends Set<E>,
  const C extends CollectionSettings<T, E, any>,
  R extends boolean = C['async'] extends boolean ? C['async'] : false
> implements CollectionAdapter<T, E, R> {
  public get async(): R {
    return this.#async;
  }
  public get configuration(): C {
    return this.#configuration;
  }
  public get size(): number {
    return this.#items.size;
  }
  public get  value(): T {
    // Implementation depends on specific requirements.
    return {} as T;
  }
  version = "1.0.0";

  #async: R = false as R;
  #configuration: C;
  #items: T = new Set() as unknown as T;
  constructor(
    settings: C,
    ...elements: E[]
  ) {
    this.#configuration = settings;
    elements.forEach(e => this.#items.add(e));
  }
  public add(...element: E[]): AsyncReturn<R, this> {
    element.forEach(e => this.#items.add(e));
    return this as AsyncReturn<R, this>;
  }
  public clear(): AsyncReturn<R, this> {
    this.#items = new Set() as unknown as T;
    return this as AsyncReturn<R, this>;
  }
  public setAsync(async: R): this {
    this.#async = async;
    return this;
  }
  public delete(...element: E[]): AsyncReturn<R, boolean> {
    this.#items.delete(element[0]);
    return false as AsyncReturn<R, boolean>;
  }
  public destroy(): AsyncReturn<R, this> {
    this.#items = new Set() as unknown as T;
    return this as AsyncReturn<R, this>;
  }
  public forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): AsyncReturn<R, this> {
    this.#items.forEach((value: E) => {
      callbackfn.call(thisArg, value, this);
    });
    return this as AsyncReturn<R, this>;
  }
  public getValue(): AsyncReturn<R, T> {
    // Implementation depends on specific requirements.
    return {} as AsyncReturn<R, T>;
  }
  public has(element: E): AsyncReturn<R, boolean> {
    return this.#items.has(element) as AsyncReturn<R, boolean>;
  }
  public lock(): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public setValue(value: T): AsyncReturn<R, this> {
    // Implementation depends on specific requirements.
    return this as AsyncReturn<R, this>;
  }
  public unlock(): AsyncReturn<R, this> {
    // Implementation depends on specific requirements.
    return this as AsyncReturn<R, this>;
  }

  [Symbol.iterator](): IterableIterator<IterValue<T>> {
    return this.#items[Symbol.iterator]() as IterableIterator<IterValue<T>>;
  }
}
