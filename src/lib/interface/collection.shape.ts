import type { AsyncReturn, DataShape } from '@typedly/data';
// Interface.
import type { Collection as CollectionTrait } from '@typedly/data-traits';
// Type.
import type { AnyIterableElement, IterableElement, AnyIterable } from '@typedly/iterable';
/**
 * @description The `CollectionShape` interface defines the structure and behavior of a collection data structure, which can be implemented by various types of collections such as sets, arrays, or maps.
 * It extends the `DataShape` interface, allowing it to inherit common data-related properties and methods while also introducing collection-specific functionalities.
 * @export
 * @interface CollectionShape
 * @template {AnyIterable<E>} T The iterable collection type.
 * @template [E=AnyIterableElement<T>] The type of elements in the collection inferred from the `T` if possible.
 * @template {boolean} [S=false] The async behavior flag.
 * @extends {DataShape<T, S>} The data-related functionalities defined in `DataShape`.
 * @extends {CollectionTrait<E, S>} The base collection functionalities defined in `CollectionTrait`.
 * @see {@link AnyIterableElement}
 * @see {@link DataShape}
 */
export interface CollectionShape<
  T extends AnyIterable<E>,
  E = AnyIterableElement<T>,
  S extends boolean = false,
> extends DataShape<T, S>, CollectionTrait<E, S> {
  /**
   * @description Executes a provided function once for each collection element.
   * @param {(element: E, collection: this) => void} callbackfn Function to execute for each element.
   * @param {?*} [thisArg] Value to use as `this` when executing `callbackfn`.
   * @returns {AsyncReturn<S, this>} 
   */
  forEach(callbackfn: (element: E, collection: this) => void, thisArg?: any): AsyncReturn<S, this>;

  /**
   * @description Returns an iterable of the values in the collection.
   * The type of the values is determined by the generic type `T`, which represents the iterable collection type.
   * If `T` is not provided, it defaults to `Iterable<unknown>`, and the values will be of type `unknown`.
   * @returns {IterableIterator<IterableElement<T>>} 
   */
  [Symbol.iterator](): IterableIterator<IterableElement<T>>;
}
