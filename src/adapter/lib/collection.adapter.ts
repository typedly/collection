// Type.
import { CollectionShape } from "../../lib/interface/collection.shape";
/**
 * @description The adapter interface for collections.
 * @export
 * @interface CollectionAdapter
 * @template E type of elements in the collection.
 * @template {Iterable<E>} T The type of the collection.
 * @template {boolean} R The async behavior flag.
 * @extends {CollectionShape<E, T, R>}
 */
export interface CollectionAdapter<
  E,
  T extends Iterable<E>,
  R extends boolean,
> extends CollectionShape<E, T, R> {
  readonly version: string;
}
