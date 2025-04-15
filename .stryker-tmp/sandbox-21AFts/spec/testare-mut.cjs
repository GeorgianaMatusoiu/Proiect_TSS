// @ts-nocheck
const { expect } = require("chai");
const Ex1 = require ("../exercitii-test.cjs");

describe("Stryker: ucide mutantul if (c < 2)", () => {
  it("Execută doar linia if (c < 2)", () => {
    const myObj = new Ex1();

    // LOG ca să verifici dacă ajunge efectiv la acea linie
    const rezultat = myObj.rezolvare(1, 100, 1000);
    console.log("Rezultat:", rezultat);

    expect(rezultat).to.deep.equal(["input invalid", null]);
  });
});