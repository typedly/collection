// Interface.
import { InferAsync } from "@typedly/data";
import { CollectionShape } from "./collection.shape";
// Type.
import { ConstrainedConstructor } from "@typedly/constructor";
import { InferCollectionType, InferElement } from "../../inference";
/**
 * @description The constructor type for `CollectionShape`.
 * @export
 * @interface CollectionConstructor
 * @template {CollectionShape<T, E, R>} S The collection shape type.
 * @template {Iterable<E>} [T=InferCollectionType<S>] The type of the elements in the collection, inferred from the collection shape or defaults to `unknown` if not specified.
 * @template [E=InferElement<S>] The element type inferred from the collection shape or defaults to `unknown` if not specified.
 * @template {boolean} [R=InferAsync<S>] The async behavior flag inferred from the collection shape or defaults to `false` if not specified.
 * @extends {ConstrainedConstructor<CollectionShape<T, E, R>, S, E[]>}
 */
export interface CollectionConstructor<
  S extends CollectionShape<T, E, R>,
  T extends Iterable<E> = InferCollectionType<S>,
  E = InferElement<S>,
  R extends boolean = InferAsync<S>,
> extends ConstrainedConstructor<
  CollectionShape<T, E, R>,
  S,
  E[]
> {}
