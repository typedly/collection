import { CollectionSettings } from "../../lib";
import { ConfigurableCollectionShape } from "../../lib/interface";
import { InferAsync, InferCollectionType, InferElement } from "../../type";
/**
 * @description The `ConfigurableCollectionAdapter` interface defines a collection data structure that can be configured based on the provided settings.
 * It extends the `ConfigurableCollectionShape` interface, allowing it to inherit collection-specific functionalities while also supporting configurability through the settings pattern.
 * @export
 * @interface ConfigurableCollectionAdapter
 * @template {CollectionSettings<E, T, R>} C 
 * @template [E=InferElement<C>] 
 * @template {Iterable<E>} [T=InferCollectionType<C>] 
 * @template {boolean} [R=InferAsync<C>] 
 * @extends {ConfigurableCollectionShape<C, E, T, R>}
 */
export interface ConfigurableCollectionAdapter<
  C extends CollectionSettings<E, T, R>,
  E = InferElement<C>,
  T extends Iterable<E> = InferCollectionType<C>,
  R extends boolean = InferAsync<C>,
> extends ConfigurableCollectionShape<C, E, T, R> {
  readonly version: string;
}
