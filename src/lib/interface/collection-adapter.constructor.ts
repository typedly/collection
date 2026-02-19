// Interface.
import { CollectionAdapter } from "./collection.adapter";
/**
 * @description The interface of adapter constructor.
 * @export
 * @interface CollectionAdapterConstructor
 * @template E Elements type.
 * @template {boolean} [R=false] The boolean type indicates the async methods.
 * @template {C} [C={async: R}] The configuration object type for the constructor, which has an `async` property of type `R`.
 * @template {CollectionAdapter<E, any, R>} [A=CollectionAdapter<E, any, R>] 
 */
export interface CollectionAdapterConstructor<
  E,
  T,
  R extends boolean = false,
  C extends { async: R} = { async: R },
  A extends CollectionAdapter<E, T, R> = CollectionAdapter<E, T, R>
> {
  new ({async}: C, ...elements: E[]): A;
}
