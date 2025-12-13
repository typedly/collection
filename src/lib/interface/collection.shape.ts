// Interface.
import { AsyncReturn, DataShape } from '@typedly/data';
/**
 * @description Represents a collection of elements.
 * @export
 * @interface Collection
 * @template E The type of elements in the collection.
 * @template [T=any] The type of the value in the collection, data of elements.
 * @template {boolean} [R=false] The `boolean` type to determine async methods.
 * @extends {DataShape<T, R>}
 */
export interface CollectionShape<E, T = any, R extends boolean = false> extends DataShape<T, R> {
  /**
   * @description Adds elements to the collection.
   * @param {...E[]} element Element of type `T` to add.
   * @returns {AsyncReturn<R, this>} The collection instance `this`, or in `Promise`.
   */
  add(...element: E[]): AsyncReturn<R, this>;

  /**
   * @description Deletes elements from the collection.
   * @param {...E[]} element Element of type `T` to delete.
   * @returns {AsyncReturn<R, boolean>} `true` if the element was successfully deleted, otherwise `false`.
   */
  delete(...element: E[]): AsyncReturn<R, boolean>;

  /**
   * @description Executes a provided function once for each collection element.
   * @param {(value: E, value2: E, collection: CollectionShape<E, T, R>) => void} callbackfn Function to execute for each element.
   * @param {AsyncReturn<R, this>} [thisArg] Value to use as `this` when executing `callbackfn`.
   */
  forEach(callbackfn: (element: E, element2: E, collection: CollectionShape<E, T, R>) => void, thisArg?: any): AsyncReturn<R, this>;

  /**
   * @description Checks if every item exists in the collection.
   * @param {...E[]} element Element of type `T` to check for existence.
   * @returns {AsyncReturn<R, boolean>} `true` if the element exists, otherwise `false`.
   */
  has(...element: E[]): AsyncReturn<R, boolean>;

  /**
   * @description The number of items in the collection.
   * @returns {number}
   */
  readonly size: number;
}
