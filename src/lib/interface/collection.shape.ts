// Interface.
import { DataShape } from '@typedly/data';
/**
 * @description Represents a collection of elements.
 * @export
 * @interface Collection
 * @template T The type of elements in the collection.
 * @template V The type of the value in the collection, data of elements.
 * @extends {DataShape<V>}
 */
export interface CollectionShape<T, V = any> extends DataShape<V> {
  /**
   * @description Adds elements to the collection.
   * @param {...T[]} element Element of type `T` to add.
   * @returns {this} The collection instance.
   */
  add(...element: T[]): this;

  /**
   * @description Deletes elements from the collection.
   * @param {...T[]} element Element of type `T` to delete.
   * @returns {boolean} `true` if the element was successfully deleted, otherwise `false`.
   */
  delete(...element: T[]): boolean;

  /**
   * @description Executes a provided function once for each collection element.
   * @param {(value: T, value2: T, collection: CollectionShape<T, V>) => void} callbackfn Function to execute for each element.
   * @param {any} [thisArg] Value to use as `this` when executing `callbackfn`.
   */
  forEach(callbackfn: (element: T, element2: T, collection: CollectionShape<T, V>) => void, thisArg?: any): void;

  /**
   * @description Checks if every item exists in the collection.
   * @param {...T[]} element Element of type `T` to check for existence.
   * @returns {boolean} `true` if the element exists, otherwise `false`.
   */
  has(...element: T[]): boolean;

  /**
   * @description The number of items in the collection.
   * @returns {number}
   */
  readonly size: number;

  /**
   * @description Returns a tag name for collection.
   * @returns {string} 
   */
  get [Symbol.toStringTag](): string;

  /**
   * @description Returns an iterator for the collection.
   * @returns {Iterator<T>} 
   */
  [Symbol.iterator](): Iterator<T>;
}
