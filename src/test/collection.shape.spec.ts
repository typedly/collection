import { IterValue } from '@typedly/data';
import { CollectionShape } from '../lib';


export class AnyCollection<
  E,
  T = Set<E>
> implements CollectionShape<E, T, false> {
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

  forEach(callbackfn: (element: E, element2: E, collection: CollectionShape<E, T, false>) => void, thisArg?: any): this {
    (this.#items as any).forEach((value: E) => {
      callbackfn.call(thisArg, value, value, this);
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

type VOfAnyCollection = typeof anyCollection1 extends CollectionShape<any, infer V, any> ? V : never;
type IterOfAnyCollection = IterValue<VOfAnyCollection>;


describe('CollectionShape', () => {
  it(``, () => {
    expect(AnyCollection.prototype.add).toBeDefined();
    expect(AnyCollection.prototype.delete).toBeDefined();
    expect(AnyCollection.prototype.forEach).toBeDefined();
    expect(AnyCollection.prototype.has).toBeDefined();
  });
});

