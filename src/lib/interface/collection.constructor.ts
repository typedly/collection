// Interface & Type.
import { CollectionShape } from "./collection.shape";
import { ConstrainedConstructor } from "@typedly/constructor";
import { InferAsync, IterableElement } from "@typedly/data";
import { InferCollectionType } from "../../inference";
/**
 * @description The constructor type for `CollectionShape`.
 * @export
 * @interface CollectionConstructor
 * @template {CollectionShape<T, E, S>} I The collection shape type.
 * @template {Iterable<E>} [T=InferCollectionType<I>] The type of the elements in the collection, inferred from the collection shape or defaults to `unknown` if not specified.
 * @template [E=IterableElement<T>] The element type inferred from the collection type `T`.
 * @template {boolean} [S=InferAsync<I>] The async behavior flag inferred from the collection shape or defaults to `false` if not specified.
 * @extends {ConstrainedConstructor<CollectionShape<T, E, S>, I, E[]>}
 * @see {@link CollectionShape}
 * @see {@link InferCollectionType}
 * @see {@link IterableElement}
 * @see {@link InferAsync}
 */
export interface CollectionConstructor<
  I extends CollectionShape<T, E, S>,
  T extends Iterable<E> = InferCollectionType<I>,
  E = IterableElement<T>,
  S extends boolean = InferAsync<I>,
> extends ConstrainedConstructor<
  CollectionShape<T, E, S>,
  I,
  E[]
> {}
