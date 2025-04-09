import { expect } from "chai";
import Ex1 from "../exercitii-test.js";

const myObj = new Ex1();

describe("Teste speciale pentru mutanți Stryker", function () {

  // 🔢 Inițializare și valori statice
  it("Inițializare corectă a valorilor statice", function () {
    expect(Ex1.rezultat_corect1).to.equal(-100000);
    expect(Ex1.rezultat_corect2).to.equal(-100000);
    expect(Ex1.rezultat_corect3).to.equal(-100000);
  });

  it("Skip inițializare rezultat_corect când e deja setat", function () {
    Ex1.rezultat_corect3 = 999;
    const [a, b] = myObj.rezolvare(2, 1, 3);
    myObj.verificare(2, 1, 3, a, b);
  });

  it("Activează logica de inițializare rezultat_corect", function () {
    Ex1.rezultat_corect3 = -100000;
    myObj.verificare(2, 1, 3, 5, 2);
    expect(Ex1.rezultat_corect3).to.equal(5);
    expect(Ex1.rezultat_corect2).to.equal(5);
    expect(Ex1.rezultat_corect1).to.equal(5);
  });

  // ✅ Verificări răspunsuri corecte/greșite
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

  it("Răspuns greșit cu count sub 3 → încurajează să mai încerce", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 7;
    Ex1.rezultat_corect2 = 7;
    Ex1.rezultat_corect3 = 7;
    const result = myObj.verificare(2, 1, 3, 0, 0);
    expect(result).to.equal("Răspuns greșit! Mai încearcă :)");
  });

  it("Depășește 3 încercări → returnează răspunsul corect", function () {
    Ex1.count = 3;
    Ex1.rezultat_corect1 = 5;
    Ex1.rezultat_corect2 = 5;
    Ex1.rezultat_corect3 = 5;
    const result = myObj.verificare(2, 1, 3, 0, 0);
    expect(result).to.include("Rezultatul corect este");
  });

  it("Verificare cu input invalid → returnează mesajul de eroare", function () {
    const result = myObj.verificare(1, 1, 2, 0, 0);
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
  });

  // 👥 Teste pentru combinații corecte/greșite
  it("a greșit, b corect", function () {
    const [a_corect, b_corect] = myObj.rezolvare(2, 1, 3);
    const result = myObj.verificare(2, 1, 3, a_corect + 1, b_corect);
    expect(result).to.include("Răspuns greșit");
  });

  it("a corect, b greșit", function () {
    Ex1.count = 0;
    const [a_corect, b_corect] = myObj.rezolvare(2, 1, 3);
    const result = myObj.verificare(2, 1, 3, a_corect, b_corect + 1);
    expect(result).to.include("Răspuns greșit");
  });

  // 🔁 Condiții din metoda `rezolvare`
  it("Condiția c < 2 - true și false", function () {
    expect(myObj.rezolvare(1, 1, 4)).to.deep.equal(["input invalid", null]);
    expect(myObj.rezolvare(2, 1, 4)).to.deep.equal([7, 3]);
  });

  it("Condiția d <= r - true și false", function () {
    expect(myObj.rezolvare(3, 3, 2)).to.deep.equal(["input invalid", null]);
    expect(myObj.rezolvare(3, 1, 5)).to.deep.equal([7, 2]);
  });

  it("Condiția r < 0 - true și false", function () {
    expect(myObj.rezolvare(3, -1, 5)).to.deep.equal(["input invalid", null]);
    expect(myObj.rezolvare(4, 0, 6)).to.deep.equal([8, 2]);
  });

  it("Condiția (d - r) % (c - 1) !== 0 - true și false", function () {
    expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(["input invalid", null]);
    expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
  });

  it("Condiția d / c <= r - true și false", function () {
    expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(["input invalid", null]);
    expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
  });

  it("Condiția d === r → returnează input invalid", function () {
    expect(myObj.rezolvare(3, 2, 2)).to.deep.equal(["input invalid", null]);
  });

  it("Condiția c === 2 → input valid", function () {
    expect(myObj.rezolvare(2, 1, 3)).to.deep.equal([5, 2]);
  });

  // 🔄 Teste pentru `count` și egalitatea rezultatelor
  it("Ex1.count !== 1 este true", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1);
  });

  it("Ex1.count !== 1 este false", function () {
    Ex1.count = 1;
    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1);
  });

  it("Toate rezultate egale", () => {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 7;
    Ex1.rezultat_corect2 = 7;
    Ex1.rezultat_corect3 = 7;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1);
  });

  it("Două rezultate egale, unul diferit", () => {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 7;
    Ex1.rezultat_corect2 = 7;
    Ex1.rezultat_corect3 = 8;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1);
  });

  it("Toate rezultate diferite", () => {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1);
  });

  // 🧬 Mutant killing
  it("Mutant: c < 2 este evaluat", () => {
    const result = myObj.rezolvare(1, 1, 3);
    expect(result[0]).to.equal("input invalid");
  });

  it("Mutant: d === r → invalid", () => {
    const result = myObj.rezolvare(3, 2, 2);
    expect(result[0]).to.equal("input invalid");
  });

  it("Mutant: d < r → invalid", () => {
    const result = myObj.rezolvare(3, 4, 2);
    expect(result[0]).to.equal("input invalid");
  });

  it("Mutant: fallback [null, null] în verificare", () => {
    const result = myObj.verificare(1, 1, 1, 0, 0);
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
  });

  it("Mutant: fallback destructurare invalidă", () => {
    const result = myObj.verificare(0, 0, 0, 0, 0);
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
  });

  it("Ucide mutantul: if (d <= r)", () => {
    const result = myObj.rezolvare(3, 3, 3);
    expect(result[0]).to.equal("input invalid");
  });

  it("Ucide mutantul: if (c < 2)", () => {
    const result = myObj.rezolvare(1, 0, 5);
    expect(result[0]).to.equal("input invalid");
  });
  it("Ucide mutantul: if (c < 2)", () => {
    const [a, b] = myObj.rezolvare(1, 1, 3);
    expect(a).to.equal("input invalid"); // să nu folosești `.to.include()` vag
    expect(b).to.equal(null);
  });
  it("Ucide fallback-ul invalid [null, null]", () => {
    const result = myObj.verificare(0, 0, 0, 0, 0); // c < 2 => invalid
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
  });
  it("Ucide mutantul: validare directă în verificare cu c < 2", () => {
    const result = myObj.verificare(1, 1, 3); // c < 2
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
  });
  
  
});
