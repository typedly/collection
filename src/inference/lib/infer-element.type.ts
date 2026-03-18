// Interface.
import { CollectionShape } from "../../lib";
// Type.
import { InferElementFromSettings } from "./infer-element-from-settings.type";
/**
 * @description Type to infer the element type from collection settings or adapter, with special handling for common collection types like Set, Array, and Map.
 * @export
 * @template C The collections configuration type to infer the element type from.
 * @template [F=unknown] The fallback type to use if the element type cannot be inferred from either the collection settings or the adapter.
 */
export type InferElement<C, I = undefined, F = unknown> =
  InferElementFromSettings<C, F> extends F
    ? I extends CollectionShape<any, infer E, any>
      ? E extends Iterable<infer U>
        ? U
        : E
      : F
    : InferElementFromSettings<C, F>;