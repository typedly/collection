// Interface.
import { CollectionSettings } from "../../lib";
import { ConfigurableCollectionShape } from "../../lib/interface";
// Type.
import { InferCollectionType, InferElement } from "../../inference";
import { InferAsync } from "@typedly/data";
/**
 * @description The `ConfigurableCollectionAdapter` interface defines a adapter collection data structure that can be configured based on the provided settings.
 * It extends the `ConfigurableCollectionShape` interface, allowing it to inherit collection-specific functionalities while also supporting configurability through the settings pattern.
 * @export
 * @interface ConfigurableCollectionAdapter
 * @template {CollectionSettings<T, E, R>} C The collection settings type.
 * @template {Iterable<E>} [T=InferCollectionType<C>] The type of the collection inferred from the collection settings or defaults to `unknown` if not specified.
 * @template [E=InferElement<C>] The element type inferred from the collection settings or defaults to `unknown` if not specified.
 * @template {boolean} [R=InferAsync<C>] The async behavior flag inferred from the collection settings or defaults to `false` if not specified.
 * @extends {ConfigurableCollectionShape<C, T, E, R>}
 */
export interface ConfigurableCollectionAdapter<
  C extends CollectionSettings<T, E, R>,
  T extends Iterable<E> = InferCollectionType<C>,
  E = InferElement<C>,
  R extends boolean = InferAsync<C>,
> extends ConfigurableCollectionShape<C, T, E, R> {
  readonly version: string;
}
