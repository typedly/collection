// Abstract.
import { CollectionSettings } from "./collection.settings";
// Type.
import type { DataConfig, InferAsync, IterableElement } from '@typedly/data';
/**
 * @description The configuration type for collections, which extends the generic `DataConfig` type from `@typedly/data` with specific parameters related to collection settings, collection type, element type, and async behavior.
 * This type is used to define the configuration structure for collection data structures, allowing for flexible and customizable configurations based on the specific needs of the collection implementation.
 * @export
 * @template {CollectionSettings<T, E, S>} C The collection settings type that extends `CollectionSettings` with collection type `T`, element type `E`, and async behavior `S`.
 * @template {Iterable<E>} T The collection type.
 * @template E The element type.
 * @template {boolean} [S=InferAsync<C>] The async behavior flag, inferred from the collection settings type `C`.
 * @see {@link CollectionSettings}
 * @see {@link IterableElement}
 * @see {@link InferAsync}
 */
export type CollectionConfig<
  C extends CollectionSettings<T, E, S>,
  T extends Iterable<E>,
  E = IterableElement<T>,
  S extends boolean = InferAsync<C>,
> = DataConfig<C, S>;
