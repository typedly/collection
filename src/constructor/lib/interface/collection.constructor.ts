// Interface.
import { CollectionShape } from "../../../lib";
// Type.
import { ConstrainedConstructor } from "@typedly/constructor";
/**
 * @description The constructor type for `CollectionShape`.
 * @export
 * @interface CollectionConstructor
 * @template {CollectionShape<T, E, R>} S The collection shape type.
 * @template {Iterable<E>} [T=S extends CollectionShape<infer U, any, any> ? U : unknown] The type of the elements in the collection, inferred from the collection shape or defaults to `unknown` if not specified.
 * @template [E=S extends CollectionShape<any, infer U, any> ? U : unknown] The element type inferred from the collection shape or defaults to `unknown` if not specified.
 * @template {boolean} [R=S extends CollectionShape<any, any, infer U> ? U : false] The async behavior flag inferred from the collection shape or defaults to `false` if not specified.
 * @extends {ConstrainedConstructor<CollectionShape<T, E, R>, S, E[]>}
 */
export interface CollectionConstructor<
  S extends CollectionShape<T, E, R>,
  T extends Iterable<E> = S extends CollectionShape<infer U, any, any> ? U : unknown,
  E = S extends CollectionShape<any, infer U, any> ? U : unknown,
  R extends boolean = S extends CollectionShape<any, any, infer U> ? U : false,
> extends ConstrainedConstructor<
  CollectionShape<T, E, R>,
  S,
  E[]
> {}
