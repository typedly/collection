import { CollectionAdapter, CollectionAdapterConstructor } from '../../public-api';
import { AsyncReturn, IterableElement } from '@typedly/data';
/**
 * Example class with fake async returned types.
 */
export class ExampleCollectionAdapter<
  E,
  T extends Iterable<E>,
  R extends boolean = false, 
> implements CollectionAdapter<T, E, R> {
  public get async(): R {
    return this.#async;
  }
  public get size(): number {
    if (Array.isArray(this.#items)) {
      return this.#items.length;
    }
    return 0;
  }
  public get  value(): T {
    return this.#items as T;
  }
  version = "1.0.0";
  #async: R;
  #items: T = [] as unknown as T;
  constructor(...elements: E[]) {
    this.#async = false as R;
    if (Array.isArray(this.#items)) {
      this.#items.push(...elements);
    }
  }
  public add(...element: E[]): AsyncReturn<R, this> {
    if (Array.isArray(this.#items)) {
      this.#items.push(...element);
    }
    return this as AsyncReturn<R, this>;
  }
  public clear(): AsyncReturn<R, this> {
    if (Array.isArray(this.#items)) {
      this.#items = [] as unknown as T;
    }
    return this as AsyncReturn<R, this>;
  }
  public delete(...element: E[]): AsyncReturn<R, boolean> {
    if (Array.isArray(this.#items)) {
      const index = this.#items.indexOf(element[0]);
      if (index !== -1) {
        this.#items.splice(index, 1);
        return true as AsyncReturn<R, boolean>;
      }
    }
    return false as AsyncReturn<R, boolean>;
  }
  public destroy(): AsyncReturn<R, this> {
    if (Array.isArray(this.#items)) {
      this.#items = [] as unknown as T;
    }
    return this as AsyncReturn<R, this>;
  }
  public forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): AsyncReturn<R, this> {
    if (Array.isArray(this.#items)) {
      this.#items.forEach((value: E) => {
        callbackfn.call(thisArg, value, this);
      });
    }
    return this as AsyncReturn<R, this>;
  }
  public getValue(): AsyncReturn<R, T> {
    return this.#items as AsyncReturn<R, T>;
  }
  public has(element: E): AsyncReturn<R, boolean> {
    if (Array.isArray(this.#items)) {
      return this.#items.includes(element) as AsyncReturn<R, boolean>;
    }
    return false as AsyncReturn<R, boolean>;
  }
  public lock(): this {
    return this;
  }
  public setValue(value: T): AsyncReturn<R, this> {
    if (Array.isArray(this.#items)) {
      this.#items = value as unknown as T;
    }
    return this as AsyncReturn<R, this>;
  }
  public unlock(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }
  *[Symbol.iterator](): IterableIterator<IterableElement<T>> {
    yield* this.#items[Symbol.iterator]() as IterableIterator<IterableElement<T>>;
  }
}

// Create factory function for creating adapter instances.
function createAdapter<
  E,
  T extends Iterable<E>,
  R extends boolean = false,
  A extends CollectionAdapter<T, E, R> = CollectionAdapter<T, E, R>
>(
  AdapterCtor: CollectionAdapterConstructor<A, E, T, R>,
  ...elements: E[]
): A {
  return new AdapterCtor(...elements);
}

// const adapter1: ExampleCollectionAdapter<number, Iterable<number>, false>
const adapter1 = createAdapter(ExampleCollectionAdapter, 1, 2, 3);
// const adapter2: ExampleCollectionAdapter<string, Iterable<string>, false>
const adapter2 = createAdapter(ExampleCollectionAdapter, 'a', 'b', 'c');
