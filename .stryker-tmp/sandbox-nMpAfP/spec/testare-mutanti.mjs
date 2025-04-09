// @ts-nocheck
import { expect } from "chai";
import Ex1 from "../exercitii-test.js";

const myObj = new Ex1();

describe("Teste speciale pentru mutanti Stryker", function () {

  it("Inițializare corectă a valorilor statice", function () {
    expect(Ex1.rezultat_corect1).to.equal(-100000);
    expect(Ex1.rezultat_corect2).to.equal(-100000);
    expect(Ex1.rezultat_corect3).to.equal(-100000);
  });

  it("Skip initializare rezultat_corect când e deja setat", function () {
    Ex1.rezultat_corect3 = 999;
    const [a, b] = myObj.rezolvare(2, 1, 3);
    myObj.verificare(2, 1, 3, a, b);
  });

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

  // 🔁 Condiții din rezolvare cu înlocuiri precise
  it("Condiția c < 2 - true și false", function () {
    expect(myObj.rezolvare(1, 1, 4)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(2, 1, 4)).to.deep.equal([7, 3]); // false
  });

  it("Condiția d <= r - true și false", function () {
    expect(myObj.rezolvare(3, 3, 2)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(3, 1, 5)).to.deep.equal([7, 2]); // false
  });

  it("Condiția r < 0 - true și false", function () {
    expect(myObj.rezolvare(3, -1, 5)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(4, 0, 6)).to.deep.equal([8, 2]); // false
  });

  it("Condiția (d - r) % (c - 1) !== 0 - true și false", function () {
    expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]); // false
  });

  it("Condiția d / c <= r - true și false", function () {
    expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(["input invalid", null]); // true
    expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]); // false
  });

  it("Activează logica de inițializare rezultat_corect", function () {
    Ex1.rezultat_corect3 = -100000;
    myObj.verificare(2, 1, 3, 5, 2);
    expect(Ex1.rezultat_corect3).to.equal(5);
    expect(Ex1.rezultat_corect2).to.equal(5);
    expect(Ex1.rezultat_corect1).to.equal(5);
  });

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

  it("Toate rezultate egale", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 9;
    Ex1.rezultat_corect2 = 9;
    Ex1.rezultat_corect3 = 9;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1);
  });

  it("Două egale, unul diferit", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 9;
    Ex1.rezultat_corect2 = 9;
    Ex1.rezultat_corect3 = 8;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1);
  });

  it("Toate diferite", function () {
    Ex1.count = 2;
    Ex1.rezultat_corect1 = 5;
    Ex1.rezultat_corect2 = 6;
    Ex1.rezultat_corect3 = 7;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(3);
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

  it("Răspuns greșit cu count sub 3 → încurajează să mai încerce", function () {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 7;
    Ex1.rezultat_corect2 = 7;
    Ex1.rezultat_corect3 = 7;
    const result = myObj.verificare(2, 1, 3, 0, 0);
    expect(result).to.equal("Răspuns greșit! Mai încearcă :)");
  });

  it("Condiția d === r → returnează input invalid", function () {
    expect(myObj.rezolvare(3, 2, 2)).to.deep.equal(["input invalid", null]);
  });

  it("Condiția c === 2 → input valid", function () {
    expect(myObj.rezolvare(2, 1, 3)).to.deep.equal([5, 2]);
  });
  // 🧪 14. a greșit, b corect
it("a greșit, b corect", function () {
    const [a_corect, b_corect] = myObj.rezolvare(2, 1, 3);
    const result = myObj.verificare(2, 1, 3, a_corect + 1, b_corect); // a greșit
    expect(result).to.include("Răspuns greșit");
  });
  
  // 🧪 15. a corect, b greșit
  it("a corect, b greșit", function () {
    Ex1.count = 0; // resetăm ca să nu intre pe 'depășit'
    const [a_corect, b_corect] = myObj.rezolvare(2, 1, 3);
    const result = myObj.verificare(2, 1, 3, a_corect, b_corect + 1); // b greșit
    expect(result).to.include("Răspuns greșit");
  });
  it("Mutant: c < 2 este evaluat", function () {
    expect(myObj.rezolvare(1, 1, 3)).to.deep.equal(["input invalid", null]);
  });
  it("Mutant: d === r → invalid", function () {
    expect(myObj.rezolvare(3, 2, 2)).to.deep.equal(["input invalid", null]);
  });
  
  it("Mutant: d < r → invalid", function () {
    expect(myObj.rezolvare(3, 4, 2)).to.deep.equal(["input invalid", null]);
  });
  it("Mutant: rezultat_corect3 === 0 → nu intră pe inițializare", function () {
    Ex1.rezultat_corect3 = 0;
    Ex1.rezultat_corect2 = -999;
    Ex1.rezultat_corect1 = -999;

    const [a, b] = myObj.rezolvare(2, 1, 3);
    myObj.verificare(2, 1, 3, a, b);

    expect(Ex1.rezultat_corect3).to.equal(0);
    expect(Ex1.rezultat_corect2).to.equal(-999);
    expect(Ex1.rezultat_corect1).to.equal(-999);
  });

  it("Mutant: fallback [null, null] în verificare", function () {
    const result = myObj.verificare(1, 1, 1, 0, 0); // input invalid => fallback intră
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
  });
  
  

});
