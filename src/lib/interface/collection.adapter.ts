// Interface.
import { CollectionSettings } from "./collection.settings";
import { CollectionShape } from "./collection.shape";
// Type.
import { InferAsync, InferCollectionType, InferElement } from "../../type";
/**
 * @description The adapter interface for collections.
 * @export
 * @interface CollectionAdapter
 * @template {CollectionSettings<E, T, R>} C 
 * @template [E=InferElement<C>] The type of elements in the collection.
 * @template [T=InferCollectionType<C>] The type of the collection.
 * @template {boolean} [R=InferAsync<C>] The async behavior flag.
 * @extends {CollectionShape<C, E, T, R>}
 */
export interface CollectionAdapter<
  C extends CollectionSettings<E, T, R>,
  E = InferElement<C>,
  T = InferCollectionType<C>,
  R extends boolean = InferAsync<C>,
> extends CollectionShape<C, E, T, R> {
  readonly version: string;
}
