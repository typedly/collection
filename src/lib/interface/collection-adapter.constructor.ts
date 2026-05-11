// Interface & Type.
import type { CollectionAdapterShape } from "./collection-adapter.shape";
import type { AnyIterable, AnyIterableElement } from "@typedly/iterable";
/**
 * @description The interface of adapter constructor.
 * @export
 * @interface CollectionAdapterConstructor
 * @template {CollectionAdapterShape<T, E, S> | undefined} A The adapter shape type.
 * @template {AnyIterable<E>} T Value type under which the elements are stored.
 * @template [E=AnyIterableElement<T>] Elements type of `T`.
 * @template {boolean} [S=false] The boolean type indicates the async methods.
 */
export interface CollectionAdapterConstructor<
  A extends CollectionAdapterShape<T, E, S> | undefined,
  T extends AnyIterable<E>,
  E = AnyIterableElement<T>,
  S extends boolean = false
> {
  new (...elements: E[]): A;
}
