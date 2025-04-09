// @ts-nocheck
import { expect } from "chai";
import Ex1 from "../mutanti/mutant1.js"; 

const myObj = new Ex1();

describe("Testare functionala- mutant1", function () {
    // am pus cateva exemple din fiecare clasa, sunt mult mai multe teste
    it("Respecta toate constrangerile", function () {
        expect(myObj.rezolvare(2, 1, 3)).to.deep.equal([5, 2]);
    });

    it("Afiseaza \"input invalid\" (impartire la zero)", function () {
        expect(myObj.rezolvare(3, 2, 2)).to.deep.equal(["input invalid", null]);
    });

    it("Afiseaza \"input invalid\" (b nu este natural)", function () {
        expect(myObj.rezolvare(3, 2, 5)).to.deep.equal(["input invalid", null]);
    });

    it("Afiseaza \"input invalid\" (rest negativ)", function () {
        expect(myObj.rezolvare(3, -1, 3)).to.deep.equal(["input invalid", null]);
    });

    it("Afiseaza \"input invalid\" (b=r)", function () {
        expect(myObj.rezolvare(4, 2, 8)).to.deep.equal(["input invalid", null]);
    });

    it("Test frontiera - afiseaza \"input invalid\"", function () {
        expect(myObj.rezolvare(1, 2, 4)).to.deep.equal(["input invalid", null]);
        expect(myObj.rezolvare(1, 2, 2)).to.deep.equal(["input invalid", null]);
    });

});

describe("Testare structurala -mutant1", function () {
    // Acoperire la nivel de instructiune
    it("Respecta toate constrangerile (ramificare stanga)", function () {
        expect(myObj.rezolvare(2, 1, 3)).to.deep.equal([5, 2]);
    });

    it("Afiseaza 'input invalid' (c prea mic)", function () {
        expect(myObj.rezolvare(1, 1, 3)).to.deep.equal(["input invalid", null]);
    });

    // Acoperire la nivel de decizie
    it("Afiseaza 'input invalid' (r negativ)", function () {
        expect(myObj.rezolvare(3, -2, 7)).to.deep.equal(["input invalid", null]);
    });

    it("Afiseaza 'input invalid' (d < r)", function () {
        expect(myObj.rezolvare(3, 4, 2)).to.deep.equal(["input invalid", null]);
    });

    it("Afiseaza 'input invalid' (impartire neintreaga)", function () {
        expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(["input invalid", null]);
    });

    it("Afiseaza 'input invalid' (b = r)", function () {
        expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(["input invalid", null]);
    });

    // Acoperire la nivel de conditii (true/false)
    it("Caz adevarat si caz fals - valid vs invalid -conditie C1 (c<2)", function () {
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
        expect(myObj.rezolvare(1, 2, 8)).to.deep.equal(["input invalid", null]);
    });

    it("Caz adevarat si caz fals - valid vs invalid -conditie C2 (d<=r)", function () {
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
        expect(myObj.rezolvare(4, 3, 3)).to.deep.equal(["input invalid", null]); 
    });

    it("Caz adevarat si caz fals - valid vs invalid -conditie C3 (r<0)", function () {
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
        expect(myObj.rezolvare(4, -1, 8)).to.deep.equal(["input invalid", null]); 
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]); 
        expect(myObj.rezolvare(4, -1, 8)).to.deep.equal(["input invalid", null]); 

    });

    it("Caz adevarat si caz fals - valid vs invalid -conditie C4 ((d - r) % (c - 1) !== 0)", function () {
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
        expect(myObj.rezolvare(4, 1, 8)).to.deep.equal(["input invalid", null]); 
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);

    });

    it("Caz adevarat si caz fals - valid vs invalid -conditie C5 ( d/c <= r)", function () {
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]);
        expect(myObj.rezolvare(3, 6, 8)).to.deep.equal(["input invalid", null]); 
        expect(myObj.rezolvare(4, 1, 7)).to.deep.equal([9, 2]); 
    });

    //  Acoperire pe instructiuni (statement coverage)
    it("Statement coverage", function () {
        expect(myObj.verificare(4, 1, 7, 9, 2)).to.equal("Răspuns corect!");
        expect(myObj.verificare(1, 2, 1, 5, 1)).to.equal("Date invalide! Recitiți restricțiile.");
        expect(myObj.verificare(4, 1, 7, 9, 3)).to.equal("Răspuns greșit! Mai încearcă :)");

        // depasire incercari
        const rasp_corect = 9;
        Ex1.rezultat_corect1 = 9;
        Ex1.rezultat_corect2 = 9;
        Ex1.rezultat_corect3 = 9;
        Ex1.count = 3;
        expect(myObj.verificare(4, 1, 7, 5, 3)).to.equal("Ați depășit numărul maxim de încercări. Rezultatul corect este 9 și 2");
    });

    //  Acoperire pe ramuri (branch coverage)
    it("Branch coverage", function () {
        expect(myObj.verificare(4, 1, 7, 9, 2)).to.equal("Răspuns corect!");
        expect(myObj.verificare(1, 2, 1, 5, 1)).to.equal("Date invalide! Recitiți restricțiile.");
        expect(myObj.verificare(4, 1, 7, 9, 3)).to.equal("Răspuns greșit! Mai încearcă :)");
    });

    //  Acoperire pe conditii individuale (condition coverage)
    it("Condition coverage", function () {
        expect(myObj.verificare(4, 1, 7, 9, 2)).to.equal("Răspuns corect!");
        expect(myObj.verificare(1, 2, 1, 5, 1)).to.equal("Date invalide! Recitiți restricțiile.");

        // toate conditii de egalitate = true
        Ex1.rezultat_corect1 = 9;
        Ex1.rezultat_corect2 = 9;
        Ex1.rezultat_corect3 = 9;
        Ex1.count = 2;
        myObj.verificare(4, 1, 7, 5, 3);
        expect(Ex1.count).to.equal(3);

        // toate conditii de egalitate = false
        Ex1.rezultat_corect1 = 5;
        Ex1.rezultat_corect2 = 6;
        Ex1.rezultat_corect3 = 7;
        Ex1.count = 2;
        myObj.verificare(4, 1, 7, 5, 3);
        expect(Ex1.count).to.equal(1);

        // count >= 2
        Ex1.count = 2;
        expect(myObj.verificare(4, 1, 7, 5, 3)).to.equal("Ați depășit numărul maxim de încercări. Rezultatul corect este 9 și 2");

        // count < 2
        Ex1.count = 1;
        expect(myObj.verificare(4, 1, 7, 5, 3)).to.equal("Răspuns greșit! Mai încearcă :)");
    });

    //  Acoperire pe circuite complete (circuit/path coverage)
    it("Circuits coverage", function () {
        // circuit 1 - raspuns corect
        // 1, 2, 3, 4, 9, 10
        expect(myObj.verificare(4, 1, 7, 9, 2)).to.equal("Răspuns corect!");

        // circuit 2 - input invalid
        // 1, 2, 3, 4, 9, 11, 12
        expect(myObj.verificare(1, 2, 1, 0, 0)).to.equal("Date invalide! Recitiți restricțiile.");

        // circuit 3 - raspuns gresit, count < 3
        // 1, 2, 3, 4, 9, 11, 13, 16, 21
        Ex1.count = 1;
        expect(myObj.verificare(4, 1, 7, 5, 3)).to.equal("Răspuns greșit! Mai încearcă :)");

        // circuit 4 - raspuns gresit, count >= 3
        // 1, 2, 3, 4, 13, 14, 15, 19, 20
        Ex1.rezultat_corect1 = 9;
        Ex1.rezultat_corect2 = 9;
        Ex1.rezultat_corect3 = 9;
        Ex1.count = 3;
        expect(myObj.verificare(4, 1, 7, 5, 3)).to.equal("Ați depășit numărul maxim de încercări. Rezultatul corect este 9 și 2");
    });


});
