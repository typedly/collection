// Interface.
import { CollectionShape } from "./collection.shape";
/**
 * @description The adapter interface for collections.
 * @export
 * @interface CollectionAdapter
 * @template Element  The type of elements in the collection.
 * @template Type The type of the value in the collection, data of elements.
 * @extends {CollectionShape<Element, Type>}
 */
export interface CollectionAdapter<Element, Type> extends CollectionShape<Element, Type> {
  version: string;
}
