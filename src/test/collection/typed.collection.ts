import { AsyncReturn, IterableElement, IterValue } from "@typedly/data";

import { CollectionSettings, CollectionShape } from "../../lib";

export class TypedCollection<
  E,
  T extends Iterable<E>,
  R extends boolean
> implements CollectionShape<T, E, R> {
  public get [Symbol.toStringTag](): string {
    return 'TypedCollection';
  }

  public get async(): R {
    return this.#async;
  }

  public get size(): number {
    return (this.#value as any).size;
  }

  public get value(): T {
    return this.#value;
  }

  #async: R;
  #value: T;
  #type: new (args: any[]) => T;

  constructor(
    async: R,
    type: new (args: any[]) => T,
    ...elements: E[]
  ) {
    this.#async = async;
    this.#type = type;
    this.#value = new type(elements);
  }

  public add(element: E): AsyncReturn<R, this> {
    (this.#value as any).add(element);
    return this as AsyncReturn<R, this>;
  }
  public clear(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }
  public delete(element: E): AsyncReturn<R, boolean> {
    return (this.#value as any).delete(element);
  }

  public destroy(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }
  public lock(): this {
    return this;
  }
  public getValue(): AsyncReturn<R, T> {
    return this.#value as AsyncReturn<R, T>;
  }

  public has(element: E): AsyncReturn<R, boolean> {
    return (this.#value as any).has(element);
  }

  public forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): AsyncReturn<R, this> {
    (this.#value as any).forEach((value: E) => {
      callbackfn.call(thisArg, value, this);
    });
    return this as AsyncReturn<R, this>;
  }

  public setValue(value: T): AsyncReturn<R, this> {
    this.#value = value;
    return this as AsyncReturn<R, this>;
  }
  public unlock(): AsyncReturn<R, this> {
    return this as AsyncReturn<R, this>;
  }

  public with<NR extends R>(settings: {async: NR}): TypedCollection<E, T, NR> {
    return new TypedCollection<E, T, NR>(
      settings.async,
      this.#type,
      ...(this.#value as any)
    );
  }

  [Symbol.iterator](): IterableIterator<IterValue<T>> {
    return this.#value[Symbol.iterator]() as IterableIterator<IterValue<T>>;
  }
}


export class Collection<
  C extends CollectionSettings<T, E, R>,
  T extends Iterable<E>,
  E = T extends Set<infer U> | Array<infer U> | Map<infer U, any>
      ? U
      : any,
  R extends boolean = C extends CollectionSettings<T, E, infer R> ? R : false
> implements CollectionShape<T, E, R> {
  get value(): T {
    return this.#value;
  }
  readonly async: R;
  readonly configuration?: C;
  readonly size: number;
  #value: T;

  constructor(
    settings: C,
    // value?: T,
    ...elements: E[]
  ) {
    this.#value = settings.value as T;
    this.async = settings.async as R;
    this.configuration = settings;
    this.size = 0; // Initialize size to 0 or calculate based on settings
  }

  getValue(): AsyncReturn<R, T> {
    return this.#value as AsyncReturn<R, T>;
  }
  setValue(value: T): AsyncReturn<R, this> {
    this.#value = value;
    return this as AsyncReturn<R, this>;
  }

  lock() {
    return this;
  }

  clear() {
    // Implementation to clean up resources used by the collection
    return this as AsyncReturn<R, this>;
  }

  destroy() {
    // Implementation to clean up resources used by the collection
    return this as AsyncReturn<R, this>;
  }

  add(...element: E[]): AsyncReturn<R, this> {
    // Implementation to add elements to the collection
    return this as AsyncReturn<R, this>;
  }

  delete(...element: E[]): AsyncReturn<R, boolean> {
    // Implementation to delete elements from the collection
    return false as AsyncReturn<R, boolean>;
  }

  forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): AsyncReturn<R, this> {
    // Implementation to execute a function for each element in the collection
    return this as AsyncReturn<R, this>;
  }

  has(...element: E[]): AsyncReturn<R, boolean> {
    // Implementation to check if elements exist in the collection
    return false as AsyncReturn<R, boolean>;
  }

  toArray?(): AsyncReturn<R, E[]> {
    // Implementation to convert the collection to an array of elements
    return [] as unknown as AsyncReturn<R, E[]>;
  }

  with<NC extends C>(settings: NC): Collection<NC, T, E, R> {
    // Implementation to update the collection's configuration settings and return a new collection instance
    // return new Collection(settings, this.#value, ...([] as E[]));
    return new Collection(settings, ...([] as E[]));
  }

  *[Symbol.iterator](): IterableIterator<IterableElement<T>> {
    yield* this.#value[Symbol.iterator]() as IterableIterator<IterableElement<T>>;
  }
}


const collection = new Collection({async: false}, 1, 2, 3);
