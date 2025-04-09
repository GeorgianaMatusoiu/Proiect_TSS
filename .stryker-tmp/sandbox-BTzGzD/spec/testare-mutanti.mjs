// @ts-nocheck
import Ex1 from "../exercitii-test.js";
import { expect } from "chai";

const myObj = new Ex1();

describe("Teste speciale pentru mutanti Stryker", function () {

    it("activează logica de inițializare rezultat_corect", function () {
        Ex1.rezultat_corect3 = -100000; // valoarea implicită, mutantul e pe semn
        myObj.verificare(2, 1, 3, 5, 2); // valid, a și b corecte
    });
    it("Ex1.count !== 1 este true", function () {
        Ex1.count = 0;
        Ex1.rezultat_corect1 = 1;
        Ex1.rezultat_corect2 = 1;
        Ex1.rezultat_corect3 = 2; // nu toate egale
        myObj.verificare(2, 1, 3, 5, 2);
        expect(Ex1.count).to.equal(1); // s-a resetat
    });
    
    it("Ex1.count !== 1 este false", function () {
        Ex1.count = 1;
        Ex1.rezultat_corect1 = 1;
        Ex1.rezultat_corect2 = 2;
        Ex1.rezultat_corect3 = 3;
        myObj.verificare(2, 1, 3, 5, 2);
        expect(Ex1.count).to.equal(1); // a rămas la 1
    });
    
    

});
