// Interface.
import { CollectionSettings, CollectionShape } from "../../../lib";
// Type.
import { ConstrainedConstructor } from "@typedly/constructor";
/**
 * @description The constructor type for `ConfigurableCollection`.
 * @export
 * @interface ConfigurableCollectionConstructor
 * @template E The type of the elements in the collection.
 * @template T The type of the value in the collection, data of elements.
 * @template {boolean} [R=false] The boolean type indicates the async methods.
 * @template {CollectionShape<E, T, R>} [S=CollectionShape<E, T, R>] The collection shape type.
 * @template {CollectionSettings<E, T, R>} [C=CollectionSettings<E, T, R>] The collection settings type.
 * @extends {ConstrainedConstructor<CollectionShape<E, T, R>, S, [C, ...E[]]>}
 */
export interface ConfigurableCollectionConstructor<
  E,
  T,
  R extends boolean = false,
  S extends CollectionShape<E, T, R> = CollectionShape<E, T, R>,
  C extends CollectionSettings<E, T, R> = CollectionSettings<E, T, R>
> extends ConstrainedConstructor<
  CollectionShape<E, T, R>,
  S,
  [C, ...E[]]
>{}
