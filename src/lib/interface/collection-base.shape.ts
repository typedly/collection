// Interface.
import { AsyncReturn } from '@typedly/data';
/**
 * @description The `CollectionShape` interface defines the structure and behavior of a collection data structure, which can be implemented by various types of collections such as sets, arrays, or maps.
 * It extends the `DataShape` interface, allowing it to inherit common data-related properties and methods while also introducing collection-specific functionalities.
 * @export
 * @interface CollectionBaseShape
 * @template E The collection's element type.
 * @template {Iterable<E>} T The collection type.
 * @template {boolean} R The async behavior flag.
 */
export interface CollectionBaseShape<
  E,
  T extends Iterable<E>,
  R extends boolean,
>  {
  /**
   * @description The number of items in the collection.
   * @returns {number}
   */
  readonly size: number;

  /**
   * @description Adds elements to the collection.
   * @param {...E[]} element Element of type `E` to add.
   * @returns {AsyncReturn<R, this>} The collection instance `this`, or in `Promise`.
   */
  add(...element: E[]): AsyncReturn<R, this>;

  /**
   * @description Deletes elements from the collection.
   * @param {...E[]} element Element of type `E` to delete.
   * @returns {AsyncReturn<R, boolean>} `true` if every element was successfully deleted, otherwise `false`.
   */
  delete(...element: E[]): AsyncReturn<R, boolean>;

  /**
   * @description Executes a provided function once for each collection element.
   * @param {(element: E, element2: E, collection: CollectionBaseShape<E, T, R>) => void} callbackfn Function to execute for each element.
   * @param {?*} [thisArg] Value to use as `this` when executing `callbackfn`.
   * @returns {AsyncReturn<R, this>} 
   */
  forEach(callbackfn: (element: E, element2: E, collection: CollectionBaseShape<E, T, R>) => void, thisArg?: any): AsyncReturn<R, this>;

  /**
   * @description Checks if every item exists in the collection.
   * @param {...E[]} element Element of type `E` to check for existence.
   * @returns {AsyncReturn<R, boolean>} `true` if every element exists, otherwise `false`.
   */
  has(...element: E[]): AsyncReturn<R, boolean>;

  /**
   * @description Converts the collection to an array of elements.
   * @returns {AsyncReturn<R, E[]>} The array of elements, or in `Promise` if `R` is `true`.
   */
  toArray?(): AsyncReturn<R, E[]>;
}
