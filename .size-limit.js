module.exports = [
  {
    name: "documented Typography usage",
    webpack: false,
    path: "bundle/current-manual/index.current-manual.js",
    limit: "55009 B"
  },
  {
    name: "documented Typography usage in evergreen browsers",
    webpack: false,
    path: "bundle/current-manual-es/index.current-manual-es.js",
    limit: "53423 B"
  },
  {
    name: "documented Typography with custom webpack conf for tree shaking",
    webpack: false,
    path: "bundle/current-manual-shakeable/index.current-manual-shakeable.js",
    limit: "53989 B"
  }
];
