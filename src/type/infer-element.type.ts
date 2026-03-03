// Interface.
import { CollectionSettings } from "../lib";
// Type.
import { InferElementFromSettings } from "./infer-element-from-settings.type";
/**
 * @description Type to infer the element type from collection settings or adapter, with special handling for common collection types like Set, Array, and Map.
 * @export
 * @template C The collections configuration type to infer the element type from.
 * @template [A=undefined] The adapter type to infer the element type from if it cannot be inferred from the collection settings.
 * @template [F=unknown] The fallback type to use if the element type cannot be inferred from either the collection settings or the adapter.
 */
export type InferElement<C, A = undefined, F = unknown> =
  C extends CollectionSettings<any, infer T, any>
    ? T extends Set<infer U> | Array<infer U> | Map<infer U, any>
      ? U
      : InferElementFromSettings<C, A, F>
    : InferElementFromSettings<C, A, F>;