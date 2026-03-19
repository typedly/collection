// Interface.
import type { AdaptableDataShape } from '@typedly/adaptable-data';
import type { CollectionSettings } from './collection.settings';
import type { ConfigurableCollectionAdapter } from '../../adapter';
import type { ConfigurableCollectionShape } from './configurable-collection.shape';
// Type.
import type { InferAsyncOf } from '@typedly/data';
import type { InferCollectionType, InferElement } from '../../inference';
import type { InferSettings } from '@typedly/configurable-data';
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
  A extends ConfigurableCollectionAdapter<C, T, E, R>,
  C extends CollectionSettings<T, E, R> = InferSettings<A>,
  T extends Iterable<E> = InferCollectionType<C, A>,
  E = InferElement<C, A>,
  R extends boolean = InferAsyncOf<[C, A]>
> extends AdaptableDataShape<A, C, T, R>, ConfigurableCollectionShape<C, T, E, R> {
  /**
   * @description Updates the collection's configuration settings and returns a new collection instance with the updated settings.
   * @template {C} NC 
   * @template {ConfigurableCollectionAdapter<NC, T, E, R>} NA 
   * @param {NC} settings The new configuration settings for the collection.
   * @returns {AdaptableCollectionShape<NA, NC, T, E, R>} 
   */
  with?<NC extends CollectionSettings<T, E, R>, NA extends ConfigurableCollectionAdapter<NC, T, E, R>>(
    settings: Partial<NC>
  ): AdaptableCollectionShape<NA, NC, T, E, R>;
}
