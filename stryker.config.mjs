/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
export default {
  mutate: ["exercitii-test.js", "!ui.js"],
  testRunner: "mocha",
  mochaOptions: {
    spec: ["spec/*.mjs"]
  },  
  reporters: ["html", "clear-text", "progress"],
  coverageAnalysis: "off"
};

