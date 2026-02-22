
import { CollectionAdapter } from "../lib";
import { CollectionShape } from "../lib/interface";
import { CollectionAdapterConstructor } from "../constructor/lib";

import { SetCollectionAdapter } from './adapter/set-collection.adapter';

import { Collection } from './collection/collection';



// export interface CollectionAdapterCtor<
//   E,
//   T,
//   R extends boolean,
//   S extends CollectionShape<E, T, R>,
//   A extends CollectionAdapter<E, T, R>
// > {
//   new (adapter: CollectionAdapterConstructor<E, T, R, A>, ...elements: E[]): S;
// }

// export class AnyCollection<
//   const C extends {async?: R; value?: T},
//   S extends CollectionShape<E, T, R>,
//   A extends CollectionAdapter<E, T, R>,
//   E = A extends CollectionAdapter<infer E, any, any> ? E : unknown,
//   T = C['value'] extends undefined | unknown ? A extends CollectionAdapter<unknown, infer T, any> ? T : unknown : C['value'],
//   R extends boolean = C['async'] extends boolean ? C['async'] : A extends CollectionAdapter<E, any, infer R> ? R : false,
// > {
//   constructor(
//     settings: C = {} as C,
//     collection: CollectionAdapterCtor<E, T, R, S, A>,
//     adapter: CollectionAdapterConstructor<E, T, R, A>,
//     ...elements: E[]
//   ) {
//   }
// }

// const anyCollection = new AnyCollection({}, AdapterCollection, SetCollectionAdapter, 1, 2, 3);
