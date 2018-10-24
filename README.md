# material-ui-shook
Tree-shaking capabilites of material-ui and how to do it.

## Workflow
```
$ yarn build
$ yarn build:profile
$ yarn size
```
Be sure to set "Show content of concatenated modules" when looking at the bundle
with webpack bundle analyzer.

## current
`@material-ui/core/*` will target files with `commonJS` modules which are not tree-shakeable.
Users have to manually tree-shake with multiple import declarations.

Even if the bundler targets the `module` field in `package.json` (which is `index.es.js`) that
file still targets modules that are compile with commonJS modules. This means
that only tree shaking on the first level is enabled.