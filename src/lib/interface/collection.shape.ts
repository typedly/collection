// Interface.
import { AsyncReturn, DataShape } from '@typedly/data';
import { CollectionSettings } from './collection.settings';
// Type.
import { InferAsync, InferCollectionType, InferElement } from '../../type';
/**
 * @description The `CollectionShape` interface defines the structure and behavior of a collection data structure, which can be implemented by various types of collections such as sets, arrays, or maps.
 * It extends the `DataShape` interface, allowing it to inherit common data-related properties and methods while also introducing collection-specific functionalities.
 * @export
 * @interface CollectionShape
 * @template {CollectionSettings<E, T, R>} [C=CollectionSettings<any, any, any>] The configuration type.
 * @template [E=InferElement<C>] The element type inferred from the configuration.
 * @template [T=InferCollectionType<C>] The collection type inferred from the configuration.
 * @template {boolean} [R=InferAsync<C>] The async behavior flag inferred from the configuration.
 * @extends {DataShape<T, C, R>}
 */
export interface CollectionShape<
  C extends CollectionSettings<E, T, R>,
  E = InferElement<C>,
  T = InferCollectionType<C>,
  R extends boolean = InferAsync<C>
> extends DataShape<T, C, R> {
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
   * @param {(element: E, element2: E, collection: CollectionShape<C, E, T, R>) => void} callbackfn Function to execute for each element.
   * @param {?*} [thisArg] Value to use as `this` when executing `callbackfn`.
   * @returns {AsyncReturn<R, this>} 
   */
  forEach(callbackfn: (element: E, element2: E, collection: CollectionShape<C, E, T, R>) => void, thisArg?: any): AsyncReturn<R, this>;

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

  /**
   * @description Updates the collection's configuration settings and returns a new collection instance with the updated settings.
   * @param {NC} settings The new configuration settings for the collection.
   * @returns {CollectionShape<NC, E, T, R>} 
   */
  with?<NC extends C>(settings: NC): CollectionShape<NC, E, T, R>;
}
