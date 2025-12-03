// Interface.
import { CollectionShape } from "../interface";
// Type.
import { ConstrainedConstructor } from "@typedly/constructor";
/**
 * @description The constructor type for CollectionShape.
 * @export
 * @template T The type of the elements in the collection.
 * @template V The type of the value in the collection, data of elements.
 * @template {CollectionShape<T, V>} C 
 */
export type CollectionConstructor<T, V, C extends CollectionShape<T, V>> = ConstrainedConstructor<
  CollectionShape<T, V>,
  C,
  T[]
>;
