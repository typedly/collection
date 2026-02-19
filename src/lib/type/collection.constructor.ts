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
 * @template {G} [G={async?: R, value?: T}] The configuration object type for the constructor, which has an `async` property of type `R` and an optional `value` property of type `T`.
 * @template {CollectionShape<E, T, R>} [C=CollectionShape<E, T, R>] 
 */
export type CollectionConstructor<
  E,
  T,
  R extends boolean = false,
  G extends { async?: R, value?: T } = { async?: R, value?: T },
  C extends CollectionShape<E, T, R> = CollectionShape<E, T, R>
> = ConstrainedConstructor<
  CollectionShape<E, T, R>,
  C,
  [G, ...E[]]
>;
