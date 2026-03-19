// Interface.
import { CollectionSettings } from "../../../lib";
import { ConfigurableCollectionAdapter } from "../../../adapter";
// Type.
import { InferCollectionType, InferElement } from "../../../inference";
import { InferAsync } from "@typedly/data";
/**
 * @description 
 * @export
 * @interface ConfigurableCollectionAdapterConstructor
 * @template {ConfigurableCollectionAdapter<C, T, E, R>} A 
 * @template {CollectionSettings<T, E, R>} [C=A extends ConfigurableCollectionAdapter<infer U, any, any, any> ? U : CollectionSettings<any, any, any>] 
 * @template [E=InferElement<C, A>] 
 * @template {Iterable<E>} [T=InferCollectionType<C, A>] 
 * @template {boolean} [R=InferAsync<C, A>] 
 */
export interface ConfigurableCollectionAdapterConstructor<
  A extends ConfigurableCollectionAdapter<C, T, E, R>,
  C extends CollectionSettings<T, E, R> = A extends ConfigurableCollectionAdapter<infer U, any, any, any> ? U : CollectionSettings<any, any, any>,
  T extends Iterable<E> = InferCollectionType<C, A>,
  E = InferElement<C, A>,
  R extends boolean = InferAsync<C, A>,
> {
  new (settings: C, ...elements: E[]): A;
}
