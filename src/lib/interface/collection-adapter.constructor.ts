// Interface.
import { CollectionAdapter } from "./collection.adapter";
/**
 * @description The interface of adapter constructor.
 * @export
 * @interface CollectionAdapterConstructor
 * @template E Elements type of `T`.
 * @template T Value type under which the elements are stored.
 * @template {boolean} [R=false] The boolean type indicates the async methods.
 * @template {CollectionAdapter<E, T, R>} [A=CollectionAdapter<E, T, R>] The adapter type. 
 */
export interface CollectionAdapterConstructor<
  A extends CollectionAdapter<T, E, R>,
  E,
  T extends Iterable<E>,
  R extends boolean
> {
  new (...elements: E[]): A;
}
