import { CollectionAdapter, CollectionSettings } from "../../../lib";
/**
 * @description The interface of adapter constructor with configurable async mode.
 * @export
 * @interface ConfigurableCollectionAdapterConstructor
 * @template E Elements type of `T`.
 * @template T Value type under which the elements are stored.
 * @template {CollectionSettings<E, T, any>} [C=CollectionSettings<E, T, any>] 
 * @template {CollectionAdapter<E, T, C['async']>} [A=CollectionAdapter<E, T, C['async']>] 
 */
export interface ConfigurableCollectionAdapterConstructor<
  E,
  T,
  C extends CollectionSettings<E, T, any> = CollectionSettings<E, T, any>,
  A extends CollectionAdapter<E, T, C['async']> = CollectionAdapter<E, T, C['async']>
> {
  new (settings: C, ...elements: E[]): A;
}
