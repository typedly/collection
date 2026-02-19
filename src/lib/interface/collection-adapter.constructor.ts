// Interface.
import { CollectionAdapter } from "./collection.adapter";
/**
 * @description The interface of adapter constructor.
 * @export
 * @interface CollectionAdapterConstructor
 * @template E Elements type.
 * @template {boolean} [R=false] The boolean type indicates the async methods.
 * @template {C} [C={async?: R, value?: T}] The configuration object type for the constructor, which has an `async` property of type `R` and an optional `value` property of type `T`.
 * @template {CollectionAdapter<E, T, R>} [A=CollectionAdapter<E, T, R>] 
 */
export interface CollectionAdapterConstructor<
  E,
  T,
  R extends boolean = false,
  C extends { async?: R, value?: T } = { async?: R, value?: T },
  A extends CollectionAdapter<E, T, R> = CollectionAdapter<E, T, R>
> {
  new ({async, value}: C, ...elements: E[]): A;
}
