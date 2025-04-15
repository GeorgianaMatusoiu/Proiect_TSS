/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
// @ts-nocheck

export default {
  mutate: ["exercitii-test.mjs", "!ui.js"],
  testRunner: "mocha",
  mochaOptions: {
      spec: ["spec/testare.mjs", "spec/testare-mutanti.mjs"]
       
  },  
  reporters: ["html", "clear-text", "progress"],
  coverageAnalysis: "off",
  coverageAnalysis: "perTest"

};

