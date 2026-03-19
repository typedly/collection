// Type.
import { IterableElement } from "@typedly/data";
// Interface.
import { CollectionShape } from "../../lib";
/**
 * @description The adapter interface for collections.
 * @export
 * @interface CollectionAdapter
 * @template {Iterable<E>} T The type of the collection.
 * @template [E=IterableElement<T>] The type of elements in the collection.
 * @template {boolean} [R=false] The async behavior flag.
 * @extends {CollectionShape<T, E, R>} The collection shape interface.
 * @since 
 * @version 
 * @author Ścibor Rudnicki <sciborrudnicki@wvvw.dev>
 * @see {@link CollectionShape}
 * @see {@link IterableElement}
 * @example
 * ```ts
 * import { CollectionAdapter } from "@typedly/collection";
 *
 * class MyCollectionAdapter implements CollectionAdapter<string[], string, false> {
 *   readonly version = "1.0.0";
 *  // Implement the methods defined in CollectionShape... 
 * }
 */
export interface CollectionAdapter<
  T extends Iterable<E>,
  E = IterableElement<T>,
  R extends boolean = false,
> extends CollectionShape<T, E, R> {
  readonly version: string;
}
