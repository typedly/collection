import { CollectionAdapter, CollectionAdapterConstructor } from "../lib";
import { AsyncReturn } from '@typedly/data';


/**
 * 
 * Example class with fake async returned types.
 */
export class ExampleCollectionAdapter<
  E,
  T,
  R extends boolean = false, 
> implements CollectionAdapter<E, T, R> {
  public get async(): R {
    return this.#async;
  }
  public get size(): number {
    return this.#items.length;
  }
  public get  value(): T {
    // Implementation depends on specific requirements.
    return {} as T;
  }
  version = "1.0.0";
  #async: R;
  #items: E[] = [];
  constructor({async}: {async: R}, ...elements: E[]) {
    this.#async = async;
    this.#items.push(...elements);
  }
  public add(...element: E[]): AsyncReturn<R, this> {
    this.#items.push(...element);
    return this as AsyncReturn<R, this>;
  }
  public clear(): AsyncReturn<R, this> {
    this.#items = [];
    return this as AsyncReturn<R, this>;
  }
  public delete(...element: E[]): AsyncReturn<R, boolean> {
    const index = this.#items.indexOf(element[0]);
    if (index !== -1) {
      this.#items.splice(index, 1);
      return true as AsyncReturn<R, boolean>;
    }
    return false as AsyncReturn<R, boolean>;
  }
  public destroy(): AsyncReturn<R, this> {
    this.#items = [];
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
    return this.#items.includes(element) as AsyncReturn<R, boolean>;
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

function createAdapter<
  E,
  T,
  R extends boolean = false,
  A extends CollectionAdapter<E, T, R> = CollectionAdapter<E, T, R>
>(
  AdapterCtor: CollectionAdapterConstructor<E, T, R, { async: R }, A>,
  async: R,
  ...elements: E[]
): A {
  return new AdapterCtor({ async }, ...elements);
}

// ExampleCollectionAdapter<number, unknown, false>
const adapter1 = createAdapter(ExampleCollectionAdapter, false, 1, 2, 3);
// ExampleCollectionAdapter<string, unknown, true>
const adapter2 = createAdapter(ExampleCollectionAdapter, true, 'a', 'b', 'c');
