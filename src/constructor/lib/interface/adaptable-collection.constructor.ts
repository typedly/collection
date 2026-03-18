// Interface.
import { ConfigurableCollectionAdapter } from "../../../adapter";
import { AdaptableCollectionShape, CollectionSettings } from "../../../lib";
// Type.
import { ConstrainedConstructor } from "@typedly/constructor";
import { InferAsync, InferCollectionType, InferElementFromSettings } from "../../../inference";
/**
 * @description
 * @export
 * @interface AdaptableCollectionConstructor
 * @template {AdaptableCollectionShape<A, C, T, E, R>} S 
 * @template {ConfigurableCollectionAdapter<C, T, E, R>} [A=S extends AdaptableCollectionShape<infer U, any, any, any, any> ? U : ConfigurableCollectionAdapter<any, any, any, any>] 
 * @template {CollectionSettings<T, E, R>} [C=S extends AdaptableCollectionShape<any, infer U, any, any, any> ? U : CollectionSettings<any, any, any>] 
 * @template [E=InferElementFromSettings<C>] 
 * @template {Iterable<E>} [T=InferCollectionType<C>] 
 * @template {boolean} [R=InferAsync<C>] 
 * @extends {ConstrainedConstructor<AdaptableCollectionShape<A, C, T, E, R>, S, [C, A, S, ...E[]]>}
 */
export interface AdaptableCollectionConstructor<
  S extends AdaptableCollectionShape<A, C, T, E, R>,
  A extends ConfigurableCollectionAdapter<C, T, E, R> = S extends AdaptableCollectionShape<infer U, any, any, any, any> ? U : ConfigurableCollectionAdapter<any, any, any, any>,
  C extends CollectionSettings<T, E, R> = S extends AdaptableCollectionShape<any, infer U, any, any, any> ? U : CollectionSettings<any, any, any>,
  E = InferElementFromSettings<C>,
  T extends Iterable<E> = InferCollectionType<C>,
  R extends boolean = InferAsync<C>,
> extends ConstrainedConstructor<
  AdaptableCollectionShape<A, C, T, E, R>,
  S,
  [C, A, S, ...E[]]
>{}
