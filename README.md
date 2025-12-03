<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/collection - A TypeScript type definitions package for data collection."
  />
</a>

## @typedly/collection

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **TypeScript** type definitions package for data collections with customizable storage.

## Features

- **Constructor**: The constructor type for initialization with custom storage (e.g. `Set`, `Array`).
- **Shape**: The shape of element-based collection built on @typedly/data.
- **Customizable Storage**: Support for various storage types (`Set<T>`, `T[]`, etc.) via generics with add/remove/iterate.
- **Iteration & Symbols**: Built-in `[Symbol.iterator]` for spread/for-of, with `[Symbol.toStringTag]` for debugging.
- **TypeScript-Only**: Zero runtime, pure type definitions for type-safe collections.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - Interface
    - [`CollectionShape`](#collectionshape)
  - Type
    - [`CollectionConstructor`](#collectionconstructor)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

```bash
npm install @typedly/collection --save-peer
```

## Api

```typescript
import {
  // Interface.
  CollectionShape,
  // Type.
  CollectionConstructor
} from '@typedly/collection';
```

### Interface

### `CollectionShape`

```typescript
import { CollectionShape } from '@typedly/collection';

export class AnyCollection<T, V = Set<T>> implements CollectionShape<T, V> {
  // Data shape method.
  get value(): V {
    // Implementation depends on specific requirements.
    return {} as V;
  }

  // Example internal storage.
  #items: V = new Set<T>() as V;

  constructor(initialItems?: T[], type: new (...args: any[]) => V = Set as any) {
    this.#items = new type();
    if (initialItems) {
      initialItems.forEach(item => (this.#items as any).add(item));
    }
  }

  public clear(): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public destroy(): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public lock(): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public set(value: V): this {
    // Implementation depends on specific requirements.
    return this;
  }
  public unlock(): this {
    // Implementation depends on specific requirements.
    return this;
  }


  add(element: T): this {
    (this.#items as any).add(element);
    return this;
  }

  delete(element: T): boolean {
    return (this.#items as any).delete(element);
  }

  forEach(callbackfn: (element: T, element2: T, collection: CollectionShape<T, V>) => void, thisArg?: any): void {
    (this.#items as any).forEach((value: T) => {
      callbackfn.call(thisArg, value, value, this);
    });
  }

  has(element: T): boolean {
    return (this.#items as any).has(element);
  }

  get size(): number {
    return (this.#items as any).size;
  }

  get [Symbol.toStringTag](): string {
    return 'MyCollection';
  }

  [Symbol.iterator](): Iterator<T> {
    return (this.#items as any).values();
  }
}

const obj1 = {age: 27};
const obj2 = {age: 37};
const obj3 = {age: 47};
const anyCollection = new AnyCollection<{age: number}, WeakSet<{age: number}>>([], WeakSet)
  .add(obj1)
  .add(obj2)
  .add(obj3);
```

### Type

### `CollectionConstructor`

```typescript
import { CollectionConstructor } from '@typedly/collection';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)

or via Trust Wallet

- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)

## Code of Conduct

By participating in this collection, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

## Packages

- **[@typedly/array](https://github.com/typedly/array)**: A **TypeScript** type definitions package to handle array-related operations.
- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/object](https://github.com/typedly/object)**: A **TypeScript** type definitions package to handle object-related operations.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/property](https://github.com/typedly/property)**: A **TypeScript** type definitions package to handle object property-related operations.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/collection
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/collection
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/collection
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/collection
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/collection/issues
  [typedly-forks]: https://github.com/typedly/collection/network
  [typedly-license]: https://github.com/typedly/collection/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/collection/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fcollection.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fcollection

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
