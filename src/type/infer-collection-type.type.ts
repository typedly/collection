// Interface.
import { CollectionAdapter, CollectionSettings } from "../lib";
/**
 * @description 
 * @export
 * @template C 
 * @template [A=undefined] 
 * @template [F=unknown] 
 */
export type InferCollectionType<C, A = undefined, F = unknown> =
  C extends CollectionSettings<any, infer T, any>
    ? T
    : A extends CollectionAdapter<any, infer T, any, any>
      ? T
      : F;
