// Interface.
import { CollectionAdapter } from "../../../lib";
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
  E,
  T,
  R extends boolean = false,
  A extends CollectionAdapter<E, T, R> = CollectionAdapter<E, T, R>
> {
  new (...elements: E[]): A;
}
