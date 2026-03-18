import { CollectionSettings } from "../../lib";
import { CollectionAdapterConstructor, ConfigurableCollectionAdapterConstructor } from "../../constructor/lib";
import { SetCollectionAdapter } from "../adapter/set-collection.adapter";
import { ConfigurableSetCollectionAdapter } from "../adapter/configurable-set-collection.adapter";
import { CollectionAdapter } from "../../adapter";
import { InferCollectionType, InferElement } from "../../inference/lib";
import { InferAsync } from "@typedly/data";
import { ConfigurableCollectionBase } from "./configurable-collection.base";

export class ConfigurableCollection<
  A extends CollectionAdapter<T, E, R>,
  const C extends CollectionSettings<T, E, any>,
  E = InferElement<C>,
  T extends Iterable<E> = InferCollectionType<C>,
  R extends boolean = InferAsync<C>,
> extends ConfigurableCollectionBase<E, T, R, C, A> {
  constructor(
    settings: C = {} as C,
    adapter: ConfigurableCollectionAdapterConstructor<A, C, T, E, R>,
    ...elements: E[]
  ) {
    super(settings, adapter, ...elements);
  }
}
  
const configurableCollection0 = new ConfigurableCollection(
  { async: true, value: new Set<number>() },
  ConfigurableSetCollectionAdapter,
  1, 2, 3
);

// export class ConfigurableCollection1<
//   A extends CollectionAdapter<E, T, R>,
//   const C extends CollectionSettings<E, T, any>,
//   E = A extends CollectionAdapter<infer E, any, any> ? E : unknown,
//   T = C['value'] extends undefined | unknown ? A extends CollectionAdapter<unknown, infer T, any> ? T : unknown : C['value'],
//   R extends boolean = C['async'] extends boolean ? C['async'] : A extends CollectionAdapter<E, any, infer R> ? R : false,
// > extends ConfigurableCollectionBase<E, T, R, C, A> {
//   public get configuration(): C {
//     return this.adapter.configuration as C;
//   }
//   constructor(
//     settings: C = {} as C,
//     adapter: ConfigurableCollectionAdapterConstructor<E, T, C, A>,
//     ...elements: E[]
//   ) {
//     super(settings, adapter, ...elements);
//   }
// }

// const configurableCollection1 = new ConfigurableCollection1(
//   { async: true, value: new Set<number>(), name: 'MyCollection' },
//   ConfigurableSetCollectionAdapter,
//   1, 2, 3
// );
// configurableCollection1.configuration