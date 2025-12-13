// Interface.
import { CollectionShape } from "./collection.shape";
/**
 * @description The adapter interface for collections.
 * @export
 * @interface CollectionAdapter
 * @template E  The type of elements in the collection.
 * @template T The type of the value in the collection, data of elements.
 * @template R The `boolean` type to determine async methods.
 * @extends {CollectionShape<E, T>}
 */
export interface CollectionAdapter<E, T, R extends boolean = false> extends CollectionShape<E, T, R> {
  version: string;
}
