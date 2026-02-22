import { AsyncReturn, IterValue } from '@typedly/data';
import { CollectionShape } from '../lib';

export class TypedCollection<
  E,
  T,
  R extends boolean
> implements CollectionShape<E, T, R> {
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
  #type: new (...args: E[]) => T;

  constructor(
    async: R,
    type: new (...args: E[]) => T,
    ...elements: E[]
  ) {
    this.#async = async;
    this.#type = type;
    this.#value = new type(...elements);
    elements.forEach(element => (this.#value as any).add(element));
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

  public forEach(callbackfn: (element: E, element2: E, collection: TypedCollection<E, T, R>) => void, thisArg?: any): AsyncReturn<R, this> {
    (this.#value as any).forEach((value: E) => {
      callbackfn.call(thisArg, value, value, this);
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

  public with<Async extends R>(async: Async): TypedCollection<E, T, Async> {
    return new TypedCollection<E, T, Async>(
      async,
      this.#type,
      ...(this.#value as any)
    );
  }

  [Symbol.iterator](): IterableIterator<IterValue<T>> {
    return (this.#value as any).values();
  }
}
