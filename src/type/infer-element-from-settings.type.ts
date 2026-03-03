// Interface.
import { CollectionAdapter, CollectionSettings } from "../lib";
/**
 * @description Type to infer the element type from collection settings or adapter.
 * @export
 * @template C The collections settings type to infer the element type from.
 * @template A The collection adapter type to infer the element type from.
 * @template [F=unknown] The fallback type if neither settings nor adapter provide an element type.
 */
export type InferElementFromSettings<C, A, F = unknown> = C extends CollectionSettings<infer E, any, any>
  ? E
  : A extends CollectionAdapter<infer E, any, any, any>
    ? E
    : F;