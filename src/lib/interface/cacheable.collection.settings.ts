// Interface & Type
import type { AnyIterable, AnyIterableElement } from '@typedly/iterable';
import type { CacheableSettings } from '@typedly/data';
import type { CollectionSettings } from './collection.settings';
/**
 * @description The `CacheableCollectionSettings` interface defines the settings for a cacheable collection, extending both `CollectionSettings` and `CacheableSettings`.
 * It includes generic parameters for the collection type `T`, the element type `E`, and an optional read-only flag `R`.
 * This interface allows for configuring cacheable collections with specific settings for data operations while maintaining the structure of a collection.
 * @export
 * @interface CacheableCollectionSettings
 * @template {AnyIterable<E>} T The type of collection, which must be an iterable of elements of type `E`.
 * @template [E=AnyIterableElement<T>] The type of elements in the collection, inferred from the collection type `T`.
 * @template {boolean} [S=false] The read-only flag, indicating whether the collection is read-only.
 * @extends {CollectionSettings<T, E, S>} The collection settings that define the structure and behavior of the collection.
 * @extends {CacheableSettings<T>} The cacheable settings that define the caching behavior for the collection.
 */
export interface CacheableCollectionSettings<
  T extends AnyIterable<E>,
  E = AnyIterableElement<T>,
  S extends boolean = false
> extends CollectionSettings<T, E, S>, CacheableSettings<T> {}
