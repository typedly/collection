// Interface.
import { CollectionShape } from "../interface";
// Type.
import { ConstrainedConstructor } from "@typedly/constructor";
/**
 * @description The constructor type for CollectionShape.
 * @export
 * @template E The type of the elements in the collection.
 * @template T The type of the value in the collection, data of elements.
 * @template {boolean} [R=false] The `boolean` type to determine async methods.
 * @template {CollectionShape<E, T, R>} [C=CollectionShape<E, T, R>] 
 */
export type CollectionConstructor<
  E,
  T,
  R extends boolean = false,
  C extends CollectionShape<E, T, R> = CollectionShape<E, T, R>
> = ConstrainedConstructor<
  CollectionShape<E, T, R>,
  C,
  E[]
>;
