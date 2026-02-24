import { CollectionAdapter, CollectionAdapterConstructor } from '../../public-api';
import { AsyncReturn } from '@typedly/data';
/**
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
    return this.#items as T;
  }
  version = "1.0.0";
  #async: R;
  #items: E[] = [];
  constructor(...elements: E[]) {
    this.#async = false as R;
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
    return this.#items as AsyncReturn<R, T>;
  }
  public has(element: E): AsyncReturn<R, boolean> {
    return this.#items.includes(element) as AsyncReturn<R, boolean>;
  }
  public lock(): this {
    return this;
  }
  public setValue(value: T): AsyncReturn<R, this> {
    this.#items = value as unknown as E[];
    return this as AsyncReturn<R, this>;
  }
  public unlock(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }
}

// Create factory function for creating adapter instances.
function createAdapter<
  E,
  T,
  R extends boolean = false,
  A extends CollectionAdapter<E, T, R> = CollectionAdapter<E, T, R>
>(
  AdapterCtor: CollectionAdapterConstructor<E, T, R, A>,
  ...elements: E[]
): A {
  return new AdapterCtor(...elements);
}

// ExampleCollectionAdapter<number, unknown, false>
const adapter1 = createAdapter(ExampleCollectionAdapter, 1, 2, 3);
// ExampleCollectionAdapter<string, unknown, true>
const adapter2 = createAdapter(ExampleCollectionAdapter, 'a', 'b', 'c');
