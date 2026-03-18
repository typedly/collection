// Interface.
import { CollectionSettings, CollectionShape } from "../../lib";
/**
 * @description Infer the collection type from the collection settings or adapter.
 * @export
 * @template C The collection settings type to infer the collection type from.
 * @template [I=undefined]  The collection shape type to infer the collection type from if it cannot be inferred from the collection settings.
 * @template [F=unknown] The fallback type to use if the collection type cannot be inferred from the collection settings or the adapter, defaults to `unknown`.
 */
export type InferCollectionType<C, I = undefined, F = unknown> =
  C extends CollectionSettings<infer T, any, any>
    ? T
    : I extends CollectionShape<infer T, any, any>
      ? T
      : F;
