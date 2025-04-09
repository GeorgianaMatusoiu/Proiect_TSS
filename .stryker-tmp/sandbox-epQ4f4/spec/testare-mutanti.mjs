// @ts-nocheck
import Ex1 from "../exercitii-test.js";
import { expect } from "chai";

const myObj = new Ex1();

describe("Teste speciale pentru mutanti Stryker", function () {

    it("Mutant: c < 2", function () {
        expect(myObj.rezolvare(1, 1, 3)).to.deep.equal(["input invalid", null]);
    });

    it("Mutant: d <= r", function () {
        expect(myObj.rezolvare(4, 4, 3)).to.deep.equal(["input invalid", null]);
    });

    it("Mutant: r < 0", function () {
        expect(myObj.rezolvare(4, -1, 8)).to.deep.equal(["input invalid", null]);
    });

    it("Mutant: (d - r) % (c - 1) !== 0", function () {
        expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(["input invalid", null]);
    });

    it("Mutant: d / c <= r", function () {
        expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(["input invalid", null]);
    });

    it("Control: Toate condițiile trecute - caz valid", function () {
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
    });
    describe("Mutanti supravietuitori – acoperire 100%", function () {

        it("c < 2 – trebuie sa fie invalid", () => {
          expect(myObj.rezolvare(1, 1, 3)).to.deep.equal(["input invalid", null]);
        });
      
        it("d <= r – trebuie sa fie invalid", () => {
          expect(myObj.rezolvare(4, 4, 4)).to.deep.equal(["input invalid", null]);
        });
      
        it("r < 0 – trebuie sa fie invalid", () => {
          expect(myObj.rezolvare(4, -1, 8)).to.deep.equal(["input invalid", null]);
        });
      
      });
      

});
