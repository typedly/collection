// Interface.
import { CollectionShape } from "../../../lib";
// Type.
import { ConstrainedConstructor } from "@typedly/constructor";
/**
 * @description The constructor type for CollectionShape.
 * @export
 * @template E The type of the elements in the collection.
 * @template T The type of the value in the collection, data of elements.
 * @template {boolean} [R=false] The boolean type indicates the async methods.
 * @template {CollectionShape<E, T, R>} [S=CollectionShape<E, T, R>] The collection shape type.
 */
export interface CollectionConstructor<
  E,
  T,
  R extends boolean = false,
  S extends CollectionShape<E, T, R> = CollectionShape<E, T, R>
> extends ConstrainedConstructor<
  CollectionShape<E, T, R>,
  S,
  [...E[]]
>{}
