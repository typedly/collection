// Interface.
import { CollectionSettings, CollectionShape } from "../../lib";
/**
 * @description Infer the async type from the collection settings or adapter.
 * @export
 * @template C The collection settings type to infer the async type from.
 * @template [I=undefined]  The collection shape type to infer the async type from.
 * @template [F=false] The fallback type to use if the async type cannot be inferred from the collection settings or adapter, defaults to `false`.
 */
export type InferAsync<C, I = undefined, F = false> =
  C extends CollectionSettings<any, any, infer R>
    ? R
    : I extends CollectionShape<any, any, infer R>
      ? R
      : F;
  