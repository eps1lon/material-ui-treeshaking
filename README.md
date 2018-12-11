# material-ui-shook
Tree-shaking capabilites of material-ui and how to do it.

**Warning** Consider this experimental. If you don't monitor your build output or have
a very custom babel/webpack config this might have unwanted side effects.

## TL;DR

Leverage `config/webpack.config.current-manual-shakeable` to reduce gzipped
bundle size by 1KB.

Important parts

```js
resolve: {
  alias: {
    "@material-ui/core": "@material-ui/core/es"
  }
}
```

```js
rules: [
  {
    test: /\.js$/,
    // https://github.com/babel/babel-loader/issues/171#issuecomment-163385201
    exclude: /node_modules\/(?!(@material-ui\/core\/es)\/).*/,
    loader: "babel-loader"
  }
];
```

## Dev Workflow

```
git clone https://github.com/eps1lon/material-ui-treeshaking.git && cd material-ui-treeshaking
yarn
yarn link @material-ui/utils
yarn test
yarn size:why
```

Be sure to set "Show content of concatenated modules" when looking at the bundle
with webpack bundle analyzer.

## Dev notes

### current

`@material-ui/core/*` will target files with `commonJS` modules which are not tree-shakeable.
Users have to manually tree-shake with multiple import declarations.

Even if the bundler targets the `module` field in `package.json` (which is `index.es.js`) that
file still targets modules that are compile with commonJS modules. This means
that only tree shaking on the first level is enabled.

#### The problem

The files in `node_modules` are usually left untouched by babel (that's what the `exclude` option does).
This means that your bundle can only be parsed by evergreen browsers.

Usually package managers provide entries for es and cjs modules. mui however
currently wants their es version to target everygreen browsers not bundlers with
tree shaking capability.

##### https://github.com/babel/babel-loader/issues/171#issuecomment-163385201 to the resuce

This ads overhead for dependendants and should only be considered a workaround
until material-ui publishes the same version of the package with commonJS and esmodules.

### next
- created esm/ directory. Same babel config as main build but with esmodules
- put package.json into every subdirectory that has a module entry that points to the esm build
- ![do tree-shaking like gru](https://imgflip.com/i/2kx4yu)
