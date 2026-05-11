// Interface.
import type { CollectionShape } from "./collection.shape";
import type { AnyIterable, AnyIterableElement } from "@typedly/iterable";
/**
 * @description The adapter interface for collections.
 * @export
 * @interface CollectionAdapter
 * @template {AnyIterable<E>} T The type of the collection.
 * @template [E=AnyIterableElement<T>] The type of elements in the collection.
 * @template {boolean} [R=false] The async behavior flag.
 * @extends {CollectionShape<T, E, R>} The collection shape interface.
 * @since 
 * @version 
 * @author Ścibor Rudnicki <sciborrudnicki@wvvw.dev>
 * @see {@link CollectionShape}
 * @see {@link AnyIterableElement}
 * @example
 * ```ts
 * import { CollectionAdapter } from "@typedly/collection";
 *
 * class MyCollectionAdapter implements CollectionAdapter<string[], string, false> {
 *   readonly version = "1.0.0";
 *  // Implement the methods defined in CollectionShape... 
 * }
 */
export interface CollectionAdapterShape<
  T extends AnyIterable<E>,
  E = AnyIterableElement<T>,
  S extends boolean = false,
> extends CollectionShape<T, E, S> {
  readonly version: string;
}
