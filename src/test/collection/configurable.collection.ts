import { CollectionAdapter, CollectionSettings } from "../../lib";
import { CollectionAdapterConstructor, ConfigurableCollectionAdapterConstructor } from "../../constructor/lib";
import { CollectionBase } from './collection.base';
import { ConfigurableCollectionBase } from "./configurable-collection.base";
import { SetCollectionAdapter } from "../adapter/set-collection.adapter";
import { ConfigurableSetCollectionAdapter } from "../adapter/configurable-set-collection.adapter";

export class ConfigurableCollection<
  A extends CollectionAdapter<E, T, R>,
  const C extends CollectionSettings<E, T, any>,
  E = A extends CollectionAdapter<infer E, any, any> ? E : unknown,
  T = C['value'] extends undefined | unknown ? A extends CollectionAdapter<unknown, infer T, any> ? T : unknown : C['value'],
  R extends boolean = C['async'] extends boolean ? C['async'] : A extends CollectionAdapter<E, any, infer R> ? R : false,
> extends CollectionBase<E, T, R, A> {
  constructor(
    settings: C = {} as C,
    adapter: CollectionAdapterConstructor<E, T, R, A>,
    ...elements: E[]
  ) {
    super(adapter, ...elements);
  }
}

const configurableCollection0 = new ConfigurableCollection(
  { async: true, value: new Set<number>() },
  SetCollectionAdapter,
  1, 2, 3
);

export class ConfigurableCollection1<
  A extends CollectionAdapter<E, T, R>,
  const C extends CollectionSettings<E, T, any>,
  E = A extends CollectionAdapter<infer E, any, any> ? E : unknown,
  T = C['value'] extends undefined | unknown ? A extends CollectionAdapter<unknown, infer T, any> ? T : unknown : C['value'],
  R extends boolean = C['async'] extends boolean ? C['async'] : A extends CollectionAdapter<E, any, infer R> ? R : false,
> extends ConfigurableCollectionBase<E, T, R, C, A> {
  public get configuration(): C {
    return this.adapter.configuration as C;
  }
  constructor(
    settings: C = {} as C,
    adapter: ConfigurableCollectionAdapterConstructor<E, T, C, A>,
    ...elements: E[]
  ) {
    super(settings, adapter, ...elements);
  }
}

const configurableCollection1 = new ConfigurableCollection1(
  { async: true, value: new Set<number>(), name: 'MyCollection' },
  ConfigurableSetCollectionAdapter,
  1, 2, 3
);
configurableCollection1.configuration