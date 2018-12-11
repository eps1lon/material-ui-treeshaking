module.exports = [
  {
    name: "documented Typography usage",
    webpack: false,
    path: "bundle/current-manual/index.current-manual.js",
    limit: "55118 B"
  },
  {
    name: "documented Typography usage in evergreen browsers",
    webpack: false,
    path: "bundle/current-manual-es/index.current-manual-es.js",
    limit: "53743 B"
  },
  {
    name: "documented Typography with custom webpack conf for tree shaking",
    webpack: false,
    path: "bundle/current-manual-shakeable/index.current-manual-shakeable.js",
    limit: "54279 B"
  },
  {
    name: "Typography with tree shaking from webpack",
    webpack: false,
    path: "bundle/current-magic/index.current-magic.js",
    // little bit bigger because of named import overhead
    limit: "55240 B"
  },
  {
    name: "next: Typography with tree shaking from webpack",
    webpack: false,
    path: "bundle/next-magic/index.next-magic.js",
    // gzipped tricked me :()
    limit: "55462 B"
  }
];
