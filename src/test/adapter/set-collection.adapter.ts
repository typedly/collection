import { AsyncReturn } from '@typedly/data';
import { CollectionAdapter } from "../../lib";

export class SetCollectionAdapter<
  E,
  T extends Set<E>,
  R extends boolean
> implements CollectionAdapter<E, T, R> {
  public get async(): R {
    return this.#async;
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
  #items: T = new Set() as unknown as T;
  constructor(
    ...elements: E[]
  ) {
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
  public forEach(callbackfn: (element: E, element2: E, collection: CollectionAdapter<E, T, R>) => void, thisArg?: any): AsyncReturn<R, this> {
    this.#items.forEach((value: E) => {
      callbackfn.call(thisArg, value, value, this);
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
}
