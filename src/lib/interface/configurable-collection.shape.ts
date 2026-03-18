// Interface.
import type { CollectionSettings } from "./collection.settings";
import type { CollectionShape } from "./collection.shape";
import type { ConfigurableDataShape } from "@typedly/configurable-data";
// Type.
import type { InferAsync, InferCollectionType, InferElement } from "../../inference";
/**
 * @description The shape of configurable collection data structure, which can be implemented by various types of collections such as sets, arrays, or maps.
 * It extends the `CollectionBaseShape` interface, allowing it to inherit collection-specific functionalities while also introducing configurability through the `C` of `CollectionSettings`.
 * @export
 * @interface ConfigurableCollectionShape
 * @template {CollectionSettings<T, E, R>} [C={}] The configuration type that extends `CollectionSettings` with element type `E`, collection type `T`, and async behavior `R`. Defaults to an empty object if not provided.
 * @template [E=InferElement<C>] The element type inferred from the configuration, or defaults to `unknown` if not specified.
 * @template {Iterable<E>} [T=InferCollectionType<C>] The collection type inferred from the configuration, or defaults to `unknown` if not specified.
 * @template {boolean} [R=InferAsync<C>] The async behavior flag inferred from the configuration, or defaults to `false` if not specified.
 * @extends {ConfigurableDataShape<C, T, R>} The configurable data-related functionalities defined in `ConfigurableDataShape`.
 * @extends {CollectionShape<T, E, R>} The base collection functionalities defined in `CollectionShape`.
 */
export interface ConfigurableCollectionShape<
  C extends CollectionSettings<T, E, R> = {},
  T extends Iterable<E> = InferCollectionType<C>,
  E = InferElement<C>,
  R extends boolean = InferAsync<C>
> extends ConfigurableDataShape<C, T, R>, CollectionShape<T, E, R> {
  /**
   * @description Updates the collection's configuration settings and returns a new collection instance with the updated settings.
   * @param {Partial<NC>} settings The new configuration settings for the collection.
   * @returns {ConfigurableCollectionShape<NC, T, E, R>} A new collection instance with the updated settings.
   */
  with?<NC extends CollectionSettings<T, E, R>>(settings: Partial<NC>): ConfigurableCollectionShape<NC, T, E, R>;
}
