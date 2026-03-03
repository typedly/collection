// Interface.
import { CollectionAdapter, CollectionSettings } from "../lib";
/**
 * @description Infer the async type from the collection settings or adapter.
 * @export
 * @template C The collection settings type to infer the async type from.
 * @template [A=undefined]  The collection adapter type to infer the async type from.
 * @template [F=false] The fallback type to use if the async type cannot be inferred from the collection settings or adapter, defaults to `false`.
 */
export type InferAsync<C, A = undefined, F = false> =
  C extends CollectionSettings<any, any, infer R>
    ? R
    : A extends CollectionAdapter<any, any, any, infer R>
      ? R
      : F;
  