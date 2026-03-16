// Type.
import { CollectionShape } from "../../lib";
/**
 * @description The adapter interface for collections.
 * @export
 * @interface CollectionAdapter
 * @template {Iterable<E>} T The type of the collection.
 * @template E type of elements in the collection.
 * @template {boolean} R The async behavior flag.
 * @extends {CollectionShape<T, E, R>}
 */
export interface CollectionAdapter<
  T extends Iterable<E>,
  E,
  R extends boolean,
> extends CollectionShape<T, E, R> {
  readonly version: string;
}
