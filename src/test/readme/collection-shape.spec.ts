import { IterValue } from "@typedly/data";
import { CollectionShape } from "../../lib";

// Example class implementing CollectionShape.
export class AnyCollection<
  E,
  T = Set<E>
> implements CollectionShape<E, T, false> {
  get size(): number { return (this.#items as any).size; }
  get value(): T { return this.#items; }
  get [Symbol.toStringTag](): string { return 'AnyCollection'; }

  async = false as false;

  #items: T;

  constructor(
    { async, value }: { async: false, value?: T },
    type?: new (...args: any[]) => T,
    ...elements: E[]
  ) {
    this.async = async;
    this.#items = type ? new type() : value ? value : {} as T;
    elements.forEach(element => (this.#items as any).add(element));
  }

  add(element: E): this { (this.#items as any).add(element); return this; }
  clear(): this { return this; }
  delete(element: E): boolean { return (this.#items as any).delete(element); }
  destroy(): this { return this; }
  forEach(callbackfn: (element: E, element2: E, collection: CollectionShape<E, T, false>) => void, thisArg?: any): this {
    (this.#items as any).forEach((value: E) => callbackfn.call(thisArg, value, value, this));
    return this;
  }
  has(element: E): boolean { return (this.#items as any).has(element); }
  lock(): this { return this; }
  getValue(): T { return this.#items; }
  setValue(value: T): this { this.#items = value; return this; }
  unlock(): this { return this; }
  [Symbol.iterator](): IterableIterator<IterValue<T>> {
    return (this.#items as any).values();
  }
}

const obj1 = {age: 27};
const obj2 = {age: 37};
const obj3 = {age: 47};
const anyCollection1 = new AnyCollection<{age: number}, Set<{age: number}>>(
  { async: false, value: new Set([{age: 27}, {age: 37}, {age: 47}]) }
  )
  .add(obj1)
  .add(obj2)
  .add(obj3);

console.log(`anyCollection1:`, anyCollection1.value);

const anyCollection2 = new AnyCollection<{age: number}, Set<{age: number}>>(
  { async: false }, Set)
  .add(obj1)
  .add(obj2)
  .add(obj3);

console.log(`anyCollection2:`, anyCollection2.value);