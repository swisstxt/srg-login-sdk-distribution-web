# srg-login-sdk-distribution-web

![version](https://img.shields.io/github/v/tag/swisstxt/srg-login-sdk-distribution-web?label=version&color=blue)

Public, **zero-auth** distribution of the **SRG Login Web SDK** (`@swisstxt/srg-login-sdk`) — the
browser build of the [SRG Login KMP SDK](https://github.com/swisstxt/srg-login-mobile-sdk).

This repository mirrors the Android (gh-pages Maven) and Apple (SPM) distribution repos, for the
web/JS channel: **git tags are the versions**, and the built npm package is committed at the repo
root for each tag. Consumers install it straight from GitHub — **no npm registry account, no token,
no `.npmrc`**.

## Install

Add the dependency (npm resolves it against this repo's git tags via a semver range):

```jsonc
// package.json
{
  "dependencies": {
    "@swisstxt/srg-login-sdk": "github:swisstxt/srg-login-sdk-distribution-web#semver:^1.0.0"
  }
}
```

```bash
npm install
```

Then import it in your app:

```ts
import SrgLoginSdk from "@swisstxt/srg-login-sdk";
```

The package is a browser-only **ES module** with generated **TypeScript** definitions
(`srg-login-sdk.d.mts`).

## Documentation

- 📖 [Documentation portal](https://swisstxt.github.io/srg-login-sdk-docs/)
- 🔧 [API reference (Kotlin, generated with Dokka)](https://swisstxt.github.io/srg-login-sdk-docs/docs/api-reference)
- 🧪 [Web sample app](https://github.com/swisstxt/srg-login-sdk-sample-web)

## Versioning

- Each release is a git **tag** `vX.Y.Z` (semantic versioning), matching the SDK's unified version.
- Pin a range (`#semver:^1.0.0`) or an exact version (`#semver:1.0.0`).
- Pre-releases follow `vX.Y.Z-rc.N` and must be opted into explicitly (e.g. `#semver:1.0.0-rc.2`).

## Repository layout

Each tagged commit contains, **at the repository root**, the built production library produced by
the SDK's `jsBrowserProductionLibraryDistribution` task:

```
package.json            # name @swisstxt/srg-login-sdk, browser-only deps
srg-login-sdk.mjs       # the SDK bundle (ES module)
srg-login-sdk.d.mts     # TypeScript definitions
*.mjs                   # Kotlin/Ktor runtime modules the bundle imports
README.md               # this file
```

npm consumes the root `package.json` when resolving the git dependency.

## How releases are published

**Do not edit the distributed files by hand.** They are published automatically by the CI in
[srg-login-mobile-sdk](https://github.com/swisstxt/srg-login-mobile-sdk) on each (pre-)release: the
workflow builds the JS library, commits its contents here, and creates the `vX.Y.Z` tag.

## License

See the [SRG Login KMP SDK](https://github.com/swisstxt/srg-login-mobile-sdk) repository.
