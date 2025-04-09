// @ts-nocheck
import { expect } from "chai";
import Ex1 from "../exercitii-test.js";

const myObj = new Ex1();

describe("Teste speciale pentru mutanti Stryker", function () {

  // 🧪 1. Inițializare valori statice
  it("Inițializare corectă a valorilor statice", function () {
    expect(Ex1.rezultat_corect1).to.equal(-100000);
    expect(Ex1.rezultat_corect2).to.equal(-100000);
    expect(Ex1.rezultat_corect3).to.equal(-100000);
  });

  // 🧪 2. Nu se reintră pe inițializare dacă rezultatul e deja setat
  it("Skip initializare rezultat_corect când e deja setat", function () {
    Ex1.rezultat_corect3 = 999;
    const [a, b] = myObj.rezolvare(2, 1, 3);
    myObj.verificare(2, 1, 3, a, b); // nu reintră în if
  });

  // 🧪 3. Verifică răspuns corect și greșit
  it("Răspuns corect: a === a_corect și b === b_corect", function () {
    const [a, b] = myObj.rezolvare(2, 1, 3);
    const result = myObj.verificare(2, 1, 3, a, b);
    expect(result).to.equal("Răspuns corect!");
  });

  it("Răspuns greșit: a, b greșite → ramura else", function () {
    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;
    Ex1.count = 1;
    const result = myObj.verificare(2, 1, 3, 0, 0);
    expect(result).to.include("Răspuns greșit");
  });

  // 🧪 4. Condiții din rezolvare
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
    expect(myObj.rezolvare(4, 0, 6)).to.not.deep.equal(["input invalid", null]); // false
  });

  it("Condiția (d - r) % (c - 1) !== 0 - true și false", function () {
    expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(4, 1, 7)).to.not.deep.equal(["input invalid", null]); // false
  });

  it("Condiția d / c <= r - true și false", function () {
    expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(4, 1, 7)).to.not.deep.equal(["input invalid", null]); // false
  });

  // 🧪 5. Inițializare rezultat_corect
  it("Activează logica de inițializare rezultat_corect", function () {
    Ex1.rezultat_corect3 = -100000;
    myObj.verificare(2, 1, 3, 5, 2);
    expect(Ex1.rezultat_corect3).to.equal(5);
    expect(Ex1.rezultat_corect2).to.equal(5);
    expect(Ex1.rezultat_corect1).to.equal(5);
  });

  // 🧪 6. count !== 1 → true
  it("Ex1.count !== 1 este true", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;

    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1); // resetat
  });

  // 🧪 7. count !== 1 → false
  it("Ex1.count !== 1 este false", function () {
    Ex1.count = 1;
    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;

    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1); // neschimbat
  });

  // 🧪 8. Toate rezultate egale
  it("Toate rezultate egale", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 9;
    Ex1.rezultat_corect2 = 9;
    Ex1.rezultat_corect3 = 9;

    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1); // incrementat
  });

  // 🧪 9. Două egale
  it("Două egale, unul diferit", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 9;
    Ex1.rezultat_corect2 = 9;
    Ex1.rezultat_corect3 = 8;

    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1); // incrementat
  });

  // 🧪 10. Toate diferite
  it("Toate diferite", function () {
    Ex1.count = 2;
    Ex1.rezultat_corect1 = 5;
    Ex1.rezultat_corect2 = 6;
    Ex1.rezultat_corect3 = 7;

    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1); // resetat
  });
});
