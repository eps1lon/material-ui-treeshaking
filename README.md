**WARNING** These approaches are concerned with Material-UI V3. Starting With 4.0 you get tree-shaking out of the box. For more information see https://material-ui.com/guides/minimizing-bundle-size/#minimizing-bundle-size

# material-ui-shook
Tree-shaking capabilites of material-ui and how to do it.

**Warning** Consider this experimental. If you don't monitor your build output or have
a very custom babel/webpack config this might have unwanted side effects.

## showcase install
```
git clone https://github.com/eps1lon/material-ui-treeshaking.git && cd material-ui-treeshaking
yarn
yarn link @material-ui/utils
yarn build 
yarn start
```

### What to look for:
`@material-ui/utils` will be fully included in `current-magic` (5Kb stat). This is due to
`@material-ui/core` components being transpiled with commondJS. Therefore even
if every import from that package seems unused it cannot be guarenteed since `require`
can only be analyzed at run-time.

`@material-ui/utils` will only be included with an empty index in `next-magic` (500B stat)
In `next-magic` `@material-ui/core` components are transpiled with esmodules. Therefore
unused imports can be tree-shaken since `import` can be analyzed at compile-time.


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
