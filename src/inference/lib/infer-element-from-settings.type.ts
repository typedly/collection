// Interface.
import { CollectionSettings } from "../../lib";
/**
 * @description Type to infer the element type from collection settings or adapter.
 * @export
 * @template C The collections settings type to infer the element type from.
 * @template [F=unknown] The fallback type if neither settings nor adapter provide an element type.
 */
export type InferElementFromSettings<C, F = unknown> =
  C extends CollectionSettings<infer T, infer E, any>
    ? T extends Iterable<infer U>
      ? U
      : E
    : C extends CollectionSettings<any, infer E, any>
      ? E
      : F;