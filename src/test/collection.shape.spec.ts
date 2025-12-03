import { CollectionShape } from '../lib';

export class AnyCollection<T, V = Set<T>> implements CollectionShape<T, V> {
  // Data shape method.
  get value(): V {
    // Implementation depends on specific requirements.
    return {} as V;
  }

  // Example internal storage.
  #items: V = new Set<T>() as V;

  constructor(initialItems?: T[], type: new (...args: any[]) => V = Set as any) {
    this.#items = new type();
    if (initialItems) {
      initialItems.forEach(item => (this.#items as any).add(item));
    }
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
  public set(value: V): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public unlock(): this {
    // Implementation depends on specific requirements.
    return this;
  }


  add(element: T): this {
    (this.#items as any).add(element);
    return this;
  }

  delete(element: T): boolean {
    return (this.#items as any).delete(element);
  }

  forEach(callbackfn: (element: T, element2: T, collection: CollectionShape<T, V>) => void, thisArg?: any): void {
    (this.#items as any).forEach((value: T) => {
      callbackfn.call(thisArg, value, value, this);
    });
  }

  has(element: T): boolean {
    return (this.#items as any).has(element);
  }

  get size(): number {
    return (this.#items as any).size;
  }

  [Symbol.toStringTag](): string {
    return 'MyCollection';
  }

  [Symbol.iterator](): Iterator<T> {
    return (this.#items as any).values();
  }
}

const anyCollection = new AnyCollection<{age: number}, WeakSet<{}>>([], WeakSet).add({age: 27}).add({age: 37}).add({age: 47});
