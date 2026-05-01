// Interface & Type.
import { IterableElement } from "@typedly/data";
import { CollectionAdapterShape } from "./collection-adapter.shape";
/**
 * @description The interface of adapter constructor.
 * @export
 * @interface CollectionAdapterConstructor
 * @template {CollectionAdapterShape<T, E, S> | undefined} A 
 * @template {Iterable<E>} T Value type under which the elements are stored.
 * @template [E=IterableElement<T>] Elements type of `T`.
 * @template {boolean} [S=false] The boolean type indicates the async methods.
 */
export interface CollectionAdapterConstructor<
  A extends CollectionAdapterShape<T, E, S> | undefined,
  T extends Iterable<E>,
  E = IterableElement<T>,
  S extends boolean = false
> {
  new (...elements: E[]): A;
}
