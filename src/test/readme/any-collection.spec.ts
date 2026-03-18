import { IterableElement } from "@typedly/data";
import { CollectionShape } from "../../public-api";

// Example class implementing CollectionShape.
export class AnyCollection<
  E,
  T extends Set<E> = Set<E>
> implements CollectionShape<T, E, false> {
  async = false as false;

  // Data shape method.
  get value(): T {
    // Implementation depends on specific requirements.
    return this.#items;
  }

  // Example internal storage.
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

  public clear(): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public destroy(): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public lock(): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public getValue(): T {
    // Implementation depends on specific requirements.
    return this.#items;
  }
  public setValue(value: T): this {
    // Implementation depends on specific requirements.
    this.#items = value;
    return this;
  }
  public unlock(): this {
    // Implementation depends on specific requirements.
    return this;
  }

  add(element: E): this {
    (this.#items as any).add(element);
    return this;
  }

  delete(element: E): boolean {
    return (this.#items as any).delete(element);
  }

  forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): this {
    (this.#items as any).forEach((value: E) => {
      callbackfn.call(thisArg, value, this);
    });
    return this;
  }

  has(element: E): boolean {
    return (this.#items as any).has(element);
  }

  get size(): number {
    return (this.#items as any).size;
  }

  get [Symbol.toStringTag](): string {
    return 'MyCollection';
  }

  [Symbol.iterator](): IterableIterator<IterableElement<T>> {
    return (this.#items as any).values();
  }
}

const obj1 = {age: 27};
const obj2 = {age: 37};
const obj3 = {age: 47};

// const anyCollection1: AnyCollection<unknown, Set<{ age: number; }>>
const anyCollection1 = new AnyCollection(
  { async: false, value: new Set([{age: 27}, {age: 37}, {age: 47}]) }
  )
  .add(obj1)
  .add(obj2)
  .add(obj3);

console.log(`anyCollection1:`, anyCollection1.value);

// const anyCollection2: AnyCollection<unknown, Set<unknown>>
const anyCollection2 = new AnyCollection(
  { async: false }, Set)
  .add(obj1)
  .add(obj2)
  .add(obj3);

console.log(`anyCollection2:`, anyCollection2.value);
