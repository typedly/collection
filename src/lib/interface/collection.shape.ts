// Interface.
import { DataShape } from '@typedly/data';
// Type.
import { CollectionBaseShape } from './collection-base.shape';
/**
 * @description The `CollectionShape` interface defines the structure and behavior of a collection data structure, which can be implemented by various types of collections such as sets, arrays, or maps.
 * It extends the `DataShape` interface, allowing it to inherit common data-related properties and methods while also introducing collection-specific functionalities.
 * @export
 * @interface CollectionShape
 * @template E The type of elements in the collection.
 * @template {Iterable<E>} T The iterable collection type.
 * @template {boolean} R The async behavior flag.
 * @extends {CollectionBaseShape<E, T, R>} The base collection functionalities defined in `CollectionBaseShape`.
 * @extends {DataShape<T, undefined, R>} The data-related functionalities defined in `DataShape`.
 */
export interface CollectionShape<
  E,
  T extends Iterable<E>,
  R extends boolean,
> extends CollectionBaseShape<E, T, R>, DataShape<T, undefined, R> {}
