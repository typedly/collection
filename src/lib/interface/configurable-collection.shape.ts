// Interface.
import { DataShape } from "@typedly/data";
import { CollectionBaseShape } from "./collection-base.shape";
import { CollectionSettings } from "./collection.settings";
// Type.
import { InferAsync, InferCollectionType, InferElement } from "../../type";
/**
 * @description The shape of configurable collection data structure, which can be implemented by various types of collections such as sets, arrays, or maps.
 * It extends the `CollectionBaseShape` interface, allowing it to inherit collection-specific functionalities while also introducing configurability through the `C` of `CollectionSettings`.
 * @export
 * @interface ConfigurableCollectionShape
 * @template {CollectionSettings<E, T, R>} [C={}] The configuration type that extends `CollectionSettings` with element type `E`, collection type `T`, and async behavior `R`. Defaults to an empty object if not provided.
 * @template [E=InferElement<C>] The element type inferred from the configuration, or defaults to `unknown` if not specified.
 * @template {Iterable<E>} [T=InferCollectionType<C>] The collection type inferred from the configuration, or defaults to `unknown` if not specified.
 * @template {boolean} [R=InferAsync<C>] The async behavior flag inferred from the configuration, or defaults to `false` if not specified.
 * @extends {CollectionBaseShape<E, T, R>}
 * @extends {DataShape<T, C, R>}
 */
export interface ConfigurableCollectionShape<
  C extends CollectionSettings<E, T, R> = {},
  E = InferElement<C>,
  T extends Iterable<E> = InferCollectionType<C>,
  R extends boolean = InferAsync<C>
> extends CollectionBaseShape<E, T, R>, DataShape<T, C, R> {
  /**
   * @description Updates the collection's configuration settings and returns a new collection instance with the updated settings.
   * @param {NC} settings The new configuration settings for the collection.
   * @returns {ConfigurableCollectionShape<NC, E, T, R>} 
   */
  with?<NC extends C>(settings: NC): ConfigurableCollectionShape<NC, E, T, R>;
}
