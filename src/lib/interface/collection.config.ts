// Abstract.
import { CollectionSettings } from "./collection.settings";
// Type.
import type { DataConfig } from '@typedly/data';
/**
 * @description The configuration type for collections, which extends the generic `DataConfig` type from `@typedly/data` with specific parameters related to collection settings, collection type, element type, and async behavior.
 * This type is used to define the configuration structure for collection data structures, allowing for flexible and customizable configurations based on the specific needs of the collection implementation.
 * @export
 * @template {CollectionSettings<T, E, R>} C The collection settings type that extends `CollectionSettings` with collection type `T`, element type `E`, and async behavior `R`.
 * @template {Iterable<E>} T The collection type.
 * @template E The element type.
 * @template {boolean} [R=false] The async behavior flag.
 */
export type CollectionConfig<
  C extends CollectionSettings<T, E, R>,
  T extends Iterable<E>,
  E,
  R extends boolean = false,
> = DataConfig<C, R>;
