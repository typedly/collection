// Interface.
import { AdaptableDataShape } from '@typedly/data';
import { CollectionSettings } from './collection.settings';
import { ConfigurableCollectionAdapter } from '../../adapter';
import { ConfigurableCollectionShape } from './configurable-collection.shape';
// Type.
import { InferAsync, InferCollectionType, InferElement } from '../../type';
/**
 * @description The `AdaptableCollectionShape` interface defines a collection data structure that can adapt to different configurations and behaviors based on the provided adapter and settings.
 * It extends both the `CollectionShape` and `AdaptableDataShape` interfaces, allowing it to inherit collection-specific functionalities while also supporting adaptability through the adapter pattern.
 * @export
 * @interface AdaptableCollectionShape
 * @template {CollectionAdapter<C, E, T, R>} A Adapter type that extends `CollectionAdapter` with element type `E`, collection type `T`, async behavior `R`, and settings type `C`.
 * @template {CollectionSettings<E, T, R>} C The configuration type that extends `CollectionSettings` with element type `E`, collection type `T`, and async behavior `R`.
 * @template [E=InferElement<C, A>] The element type inferred from the configuration, or adapter, or defaults to `unknown` if not specified.
 * @template [T=InferCollectionType<C, A>] The collection type inferred from the configuration, or adapter, or defaults to `unknown` if not specified.
 * @template {boolean} [R=InferAsync<C, A>] The async behavior flag inferred from the configuration or adapter, or defaults to `false` if not specified.
 * @extends {CollectionShape<E, T, R>} The main collection functionalities defined in `CollectionShape`.
 * @extends {AdaptableDataShape<A, T, C, R>} The adaptability functionalities defined in `AdaptableDataShape`, allowing the collection to adapt based on the adapter and settings.
 */
export interface AdaptableCollectionShape<
  A extends ConfigurableCollectionAdapter<C, E, T, R>,
  C extends CollectionSettings<E, T, R>,
  // E inferred as the element type from the adapter, or defaults to `any` if not specified.
  E = InferElement<C, A>,
  // T inferred as the collection type from the adapter, or defaults to `any` if not specified.
  T extends Iterable<E> = InferCollectionType<C, A>,
  // R inferred as the async behavior from the adapter, or defaults to `false` if not specified.
  R extends boolean = InferAsync<C, A>
> extends ConfigurableCollectionShape<C, E, T, R>, AdaptableDataShape<A, T, C, R> {
  /**
   * @description Updates the collection's configuration settings and returns a new collection instance with the updated settings.
   * @template {C} NC 
   * @template {ConfigurableCollectionAdapter<NC, E, T, R>} NA 
   * @param {NC} settings The new configuration settings for the collection.
   * @returns {AdaptableCollectionShape<NA, NC, E, T, R>} 
   */
  with?<NC extends C, NA extends ConfigurableCollectionAdapter<NC, E, T, R>>(settings: NC): AdaptableCollectionShape<NA, NC, E, T, R>;
}
