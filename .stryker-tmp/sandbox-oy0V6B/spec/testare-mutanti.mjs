// @ts-nocheck
import { expect } from "chai";
import Ex1 from "../exercitii-test.mjs";

const myObj = new Ex1();

describe("Teste speciale pentru mutanți Stryker", function () {
  describe(" Inițializare și verificare statică", function () {
    it("Inițializare corectă a valorilor statice", () => {
      expect(Ex1.rezultat_corect1).to.equal(-100000);
      expect(Ex1.rezultat_corect2).to.equal(-100000);
      expect(Ex1.rezultat_corect3).to.equal(-100000);
    });

    it("Skip inițializare rezultat_corect când e deja setat", () => {
      Ex1.rezultat_corect3 = 999;
      const [a, b] = myObj.rezolvare(2, 1, 3);
      myObj.verificare(2, 1, 3, a, b);
    });

    it("Activează logica de inițializare rezultat_corect", () => {
      Ex1.rezultat_corect3 = -100000;
      myObj.verificare(2, 1, 3, 5, 2);
      expect(Ex1.rezultat_corect3).to.equal(5);
      expect(Ex1.rezultat_corect2).to.equal(5);
      expect(Ex1.rezultat_corect1).to.equal(5);
    });
  });

  describe("Răspunsuri corecte și greșite", function () {
    it("Răspuns corect: a === a_corect și b === b_corect", () => {
      const [a, b] = myObj.rezolvare(2, 1, 3);
      const result = myObj.verificare(2, 1, 3, a, b);
      expect(result).to.equal("Răspuns corect!");
    });

    it("Răspuns greșit: a, b greșite → ramura else", () => {
      Ex1.rezultat_corect1 = 1;
      Ex1.rezultat_corect2 = 2;
      Ex1.rezultat_corect3 = 3;
      Ex1.count = 1;
      const result = myObj.verificare(2, 1, 3, 0, 0);
      expect(result).to.include("Răspuns greșit");
    });

    it("Răspuns greșit cu count sub 3 → încurajează să mai încerce", () => {
      Ex1.count = 0;
      Ex1.rezultat_corect1 = 7;
      Ex1.rezultat_corect2 = 7;
      Ex1.rezultat_corect3 = 7;
      const result = myObj.verificare(2, 1, 3, 0, 0);
      expect(result).to.equal("Răspuns greșit! Mai încearcă :)");
    });

    it("Depășește 3 încercări → returnează răspunsul corect", () => {
      Ex1.count = 3;
      Ex1.rezultat_corect1 = 5;
      Ex1.rezultat_corect2 = 5;
      Ex1.rezultat_corect3 = 5;
      const result = myObj.verificare(2, 1, 3, 0, 0);
      expect(result).to.include("Rezultatul corect este");
    });

    it("Verificare cu input invalid → returnează mesajul de eroare", () => {
      const result = myObj.verificare(1, 1, 2, 0, 0);
      expect(result).to.equal("Date invalide! Recitiți restricțiile.");
    });
  });

  describe(" Combinații corecte/greșite a/b", function () {
    it("a greșit, b corect", () => {
      const [a_corect, b_corect] = myObj.rezolvare(2, 1, 3);
      const result = myObj.verificare(2, 1, 3, a_corect + 1, b_corect);
      expect(result).to.include("Răspuns greșit");
    });

    it("a corect, b greșit", () => {
      Ex1.count = 0;
      const [a_corect, b_corect] = myObj.rezolvare(2, 1, 3);
      const result = myObj.verificare(2, 1, 3, a_corect, b_corect + 1);
      expect(result).to.include("Răspuns greșit");
    });
  });

  describe(" Condiții din metoda `rezolvare`", function () {
    const invalid = ["input invalid", null];

    it("Condiția c < 2 - true și false", () => {
      expect(myObj.rezolvare(1, 1, 4)).to.deep.equal(invalid);
      expect(myObj.rezolvare(2, 1, 4)).to.deep.equal([7, 3]);
    });

    it("Condiția d <= r - true și false", () => {
      expect(myObj.rezolvare(3, 3, 2)).to.deep.equal(invalid);
      expect(myObj.rezolvare(3, 1, 5)).to.deep.equal([7, 2]);
    });

    it("Condiția r < 0 - true și false", () => {
      expect(myObj.rezolvare(3, -1, 5)).to.deep.equal(invalid);
      expect(myObj.rezolvare(4, 0, 6)).to.deep.equal([8, 2]);
    });

    it("Condiția (d - r) % (c - 1) !== 0 - true și false", () => {
      expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(invalid);
      expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
    });

    it("Condiția d / c <= r - true și false", () => {
      expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(invalid);
      expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
    });

    it("Condiția d === r → invalid", () => {
      expect(myObj.rezolvare(3, 2, 2)).to.deep.equal(invalid);
    });

    it("Condiția c === 2 → valid", () => {
      expect(myObj.rezolvare(2, 1, 3)).to.deep.equal([5, 2]);
    });
  });

  describe("Verificări count și rezultate egale", function () {
    const runVerificareAndExpectCount = (r1, r2, r3, initialCount = 0, expectedCount = 1) => {
      Ex1.count = initialCount;
      Ex1.rezultat_corect1 = r1;
      Ex1.rezultat_corect2 = r2;
      Ex1.rezultat_corect3 = r3;
      myObj.verificare(2, 1, 3, 0, 0);
      expect(Ex1.count).to.equal(expectedCount);
    };

    it("Ex1.count !== 1 este true", () => runVerificareAndExpectCount(1, 2, 3));
    it("Ex1.count !== 1 este false", () => runVerificareAndExpectCount(1, 2, 3, 1, 1));
    it("Toate rezultate egale", () => runVerificareAndExpectCount(7, 7, 7));
    it("Două rezultate egale, unul diferit", () => runVerificareAndExpectCount(7, 7, 8));
    it("Toate rezultate diferite", () => runVerificareAndExpectCount(1, 2, 3));
  });
  it("Ucide mutantul: if (c < 2) -> false (test izolat, clar și direct)", () => {
    expect(myObj.rezolvare(1, 2, 4)).to.deep.equal(["input invalid", null]); 
    expect(myObj.rezolvare(3, 1, 5)).to.not.deep.equal(["input invalid", null]); 
  });
});

describe("Ucidem mutantii supravietuitori", function () {
  const myObj = new Ex1();
  describe("Validări în metoda rezolvare", () => {
    const cazuri = [
      { label: "c < 2", input: [1, 1, 3] },
      { label: "d <= r (d === r)", input: [3, 5, 5] },
      { label: "d <= r (d < r)", input: [3, 6, 5] },
      { label: "condiție trecută, dar alt validator blochează", input: [2, 3, 2] },
    ];
    cazuri.forEach(({ label, input }) => {
      it(`Ucide mutantul: ${label}`, () => {
        expect(myObj.rezolvare(...input)).to.deep.equal(["input invalid", null]);
      });
    });
  });
  describe("Fallback destructurare invalidă", () => {
    const fallbackCases = [
      { label: "fallback []", method: "verificare", args: [0, 0, 0, 0, 0] },
      { label: "fallback [null, null] destructurare", method: "verificare", args: [1, 1, 1, 0, 0] },
      { label: "fără fallback explicit (undefined)", method: "verificare", args: [undefined, undefined, undefined, 0, 0] },
      { label: "fallback [] direct", method: "rezolvare", args: [0, 0, 0], expectTuple: true }
    ];

    fallbackCases.forEach(({ label, method, args, expectTuple }) => {
      it(`Ucide fallback-ul: ${label}`, () => {
        const result = myObj[method](...args);
        if (expectTuple) {
          const [a, b] = result;
          expect(a).to.equal("input invalid");
          expect(b).to.equal(null);
        } else {
          expect(result).to.equal("Date invalide! Recitiți restricțiile.");
        }
      });
    });
  });
  describe("Verificări count și rezultate corecte", () => {
    const cazuriEgalitate = [
      { label: "toate egale", r1: 9, r2: 9, r3: 9 },
      { label: "primele 2 egale", r1: 5, r2: 5, r3: 6 },
      { label: "ultimele 2 egale", r1: 8, r2: 9, r3: 9 },
      { label: "toate diferite", r1: 1, r2: 2, r3: 3 },
      { label: "doar r1 === r2", r1: 7, r2: 7, r3: 9 },
    ];
    cazuriEgalitate.forEach(({ label, r1, r2, r3 }) => {
      it(`Ucide mutant egalitate: ${label}`, () => {
        Ex1.rezultat_corect1 = r1;
        Ex1.rezultat_corect2 = r2;
        Ex1.rezultat_corect3 = r3;
        Ex1.count = 0;
        myObj.verificare(2, 1, 3, 0, 0);
        expect(Ex1.count).to.equal(1);
      });
    });
    it("Ucide mutantul: count !== 1 (inițializare)", () => {
      Ex1.count = 0;
      myObj.verificare(2, 1, 3, 0, 0);
      expect(Ex1.count).to.equal(1);
    });
    it("Ucide mutantul: count !== 1 (crește de la 2 la 3)", () => {
      Ex1.count = 2;
      myObj.verificare(2, 1, 3, 0, 0);
      expect(Ex1.count).to.equal(3);
    });
    it("Ucide mutantul: count === 1, NU trebuie să modifice count", () => {
      Ex1.count = 1;
      Ex1.rezultat_corect1 = 4;
      Ex1.rezultat_corect2 = 5;
      Ex1.rezultat_corect3 = 6;
      myObj.verificare(2, 1, 3, 0, 0);
      expect(Ex1.count).to.equal(1);
    });
    it("Ucide mutantul: count === 1, ramura else (cu mesaj)", () => {
      Ex1.count = 1;
      Ex1.rezultat_corect1 = 1;
      Ex1.rezultat_corect2 = 2;
      Ex1.rezultat_corect3 = 3;
      const result = myObj.verificare(2, 1, 3, 0, 0);
      expect(result).to.include("Mai încearcă");
    });
  });
  it("Ucide mutantul: rezultat_corect3 < 0 → nu se reinitializează dacă e deja 0", () => {
    Ex1.rezultat_corect1 = 0;
    Ex1.rezultat_corect2 = 0;
    Ex1.rezultat_corect3 = 0;
    const [a, b] = myObj.rezolvare(2, 1, 3);
    myObj.verificare(2, 1, 3, a, b);
    expect(Ex1.rezultat_corect3).to.equal(0);
  });
  it("Ucide mutantul NoCoverage: fallback [] vs [null, null]", () => {
    myObj.rezolvare = () => []; 
    const result = myObj.verificare(2, 1, 3, 0, 0);
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
    myObj.rezolvare = Ex1.prototype.rezolvare;
  });
  it("Ucide mutantul: verificare fallback la [null, null] dacă rezultat invalid", () => {
    myObj.rezolvare = () => [1]; 
    const result = myObj.verificare(2, 1, 3, 0, 0);
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
    myObj.rezolvare = Ex1.prototype.rezolvare; 
  });
  it("Ucide mutantul: toate 3 rezultate corecte egale", () => {
    Ex1.count = 0;
    Ex1.rezultat_corect1 = 5;
    Ex1.rezultat_corect2 = 5;
    Ex1.rezultat_corect3 = 5;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1); 
  });
  it("Ucide mutantul: count === 1 → nu se modifică", () => {
    Ex1.count = 1;
    Ex1.rezultat_corect1 = 1;
    Ex1.rezultat_corect2 = 2;
    Ex1.rezultat_corect3 = 3;
    myObj.verificare(2, 1, 3, 0, 0);
    expect(Ex1.count).to.equal(1); 
  });
  it("Fallback destructurare funcționează corect → returnează mesaj de eroare", () => {
    const original = myObj.rezolvare;
    myObj.rezolvare = () => undefined;
    const result = myObj.verificare(2, 1, 3, 0, 0);
    expect(result).to.equal("Date invalide! Recitiți restricțiile.");
    myObj.rezolvare = original;
  });
 it("Ucide fallback-ul destructurare: nu e array valid", () => {
  const original = myObj.rezolvare;
  myObj.rezolvare = () => "not an array"; 
  const rezultat = myObj.verificare(2, 1, 3, 0, 0);
  expect(rezultat).to.equal("Date invalide! Recitiți restricțiile.");
  myObj.rezolvare = original;
});
});  

