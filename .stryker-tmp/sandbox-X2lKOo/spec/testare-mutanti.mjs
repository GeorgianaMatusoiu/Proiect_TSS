// @ts-nocheck
import { expect } from "chai";
import Ex1 from "../exercitii-test.js";

const myObj = new Ex1();

describe("Teste speciale pentru mutanti Stryker", function () {

  // 🧪 1. Verificare valoare inițială (pentru mutanți la -100000)
  it("Inițializare corectă a valorilor statice", function () {
    expect(Ex1.rezultat_corect1).to.equal(-100000);
    expect(Ex1.rezultat_corect2).to.equal(-100000);
    expect(Ex1.rezultat_corect3).to.equal(-100000);
  });

  // 🧪 2. Teste pentru toate condițiile din `rezolvare()`

  it("Condiția c < 2 - true și false", function () {
    expect(myObj.rezolvare(1, 1, 4)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(2, 1, 4)).to.not.deep.equal(["input invalid", null]); // false
  });

  it("Condiția d <= r - true și false", function () {
    expect(myObj.rezolvare(3, 3, 2)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(3, 1, 5)).to.not.deep.equal(["input invalid", null]); // false
  });

  it("Condiția r < 0 - true și false", function () {
    expect(myObj.rezolvare(3, -1, 5)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(3, 0, 5)).to.not.deep.equal(["input invalid", null]); // false
  });

  it("Condiția (d - r) % (c - 1) !== 0 - true și false", function () {
    expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(4, 1, 7)).to.not.deep.equal(["input invalid", null]); // false
  });

  it("Condiția d / c <= r - true și false", function () {
    expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(4, 1, 7)).to.not.deep.equal(["input invalid", null]); // false
  });

  // 🧪 3. Activare bloc `if (Ex1.rezultat_corect3 < 0)`
  it("Activează logica de inițializare rezultat_corect", function () {
    Ex1.rezultat_corect3 = -100000;
    myObj.verificare(2, 1, 3, 5, 2); // valid
  });

  // 🧪 4. Testează count !== 1 = true și false
  it("Ex1.count !== 1 este true", function () {
    Ex1.count = 0;

    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;

    myObj.verificare(2, 1, 3, 0, 0); // invalid răspuns
    expect(Ex1.count).to.equal(1);
  });

  it("Ex1.count !== 1 este false", function () {
    Ex1.count = 1;

    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;

    myObj.verificare(2, 1, 3, 0, 0); // invalid răspuns
    expect(Ex1.count).to.equal(1); // nu s-a resetat
  });

  // 🧪 5. Testează combinații pentru egalitatea între rezultate
  it("Toate rezultate egale", function () {
    Ex1.rezultat_corect1 = 9;
    Ex1.rezultat_corect2 = 9;
    Ex1.rezultat_corect3 = 9;
    myObj.verificare(2, 1, 3, 0, 0);
  });

  it("Două egale, unul diferit", function () {
    Ex1.rezultat_corect1 = 9;
    Ex1.rezultat_corect2 = 9;
    Ex1.rezultat_corect3 = 8;
    myObj.verificare(2, 1, 3, 0, 0);
  });

  it("Toate diferite", function () {
    Ex1.rezultat_corect1 = 5;
    Ex1.rezultat_corect2 = 6;
    Ex1.rezultat_corect3 = 7;
    myObj.verificare(2, 1, 3, 0, 0);
  });

});
