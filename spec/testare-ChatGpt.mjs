// import { expect } from 'chai';
// import Ex1 from '../exercitii-test.mjs';

// describe('Testare clasa Ex1 - Teste complete', () => {
//     let ex1;

//     beforeEach(() => {
//         ex1 = new Ex1();
//     });

//     describe('Teste de frontieră', () => {
//         it('c = 2 (valoarea minimă validă)', () => {
//             expect(ex1.rezolvare(2, 0, 2)).to.eql([4, 2]);
//         });

//         it('c = 1 (valoare invalidă, sub limită)', () => {
//             expect(ex1.rezolvare(1, 0, 2)).to.eql(["input invalid", null]);
//         });

//         it('r = 0 (valoarea minimă validă)', () => {
//             expect(ex1.rezolvare(3, 0, 6)).to.eql([9, 3]);
//         });

//         it('r = -1 (valoare invalidă, sub limită)', () => {
//             expect(ex1.rezolvare(3, -1, 6)).to.eql(["input invalid", null]);
//         });

//         it('d = r (egalitate invalidă)', () => {
//             expect(ex1.rezolvare(3, 5, 5)).to.eql(["input invalid", null]);
//         });

//         it('d imediat mai mic decât r', () => {
//             expect(ex1.rezolvare(3, 5, 4)).to.eql(["input invalid", null]);
//         });
//     });

//     describe('Acoperire la nivel de instrucțiune', () => {
//         it('Execută toate if-urile pe ramura validă', () => {
//             expect(ex1.rezolvare(5, 1, 17)).to.eql([22, 5]);
//         });

//         it('Execută fiecare if pe ramura invalidă (c < 2)', () => {
//             expect(ex1.rezolvare(1, 2, 10)).to.eql(["input invalid", null]);
//         });

//         it('Execută fiecare if pe ramura invalidă (d <= r)', () => {
//             expect(ex1.rezolvare(3, 5, 5)).to.eql(["input invalid", null]);
//         });

//         it('Execută fiecare if pe ramura invalidă (r < 0)', () => {
//             expect(ex1.rezolvare(3, -1, 10)).to.eql(["input invalid", null]);
//         });

//         it('Execută fiecare if pe ramura invalidă ((d - r) % (c - 1) !== 0)', () => {
//             expect(ex1.rezolvare(4, 1, 15)).to.eql(["input invalid", null]);
//         });

//         it('Execută fiecare if pe ramura invalidă (d/c <= r)', () => {
//             expect(ex1.rezolvare(3, 4, 9)).to.eql(["input invalid", null]);
//         });
//     });

//     describe('Acoperire la nivel de decizie și condiție', () => {
//         it('Toate condițiile combinate adevărate => valid', () => {
//             expect(ex1.rezolvare(4, 1, 11)).to.eql([16, 5]);
//         });

//         it('c < 2 fals, d <= r adevărat => invalid', () => {
//             expect(ex1.rezolvare(3, 8, 7)).to.eql(["input invalid", null]);
//         });

//         it('c < 2 fals, d <= r fals, r < 0 adevărat => invalid', () => {
//             expect(ex1.rezolvare(3, -5, 10)).to.eql(["input invalid", null]);
//         });

//         it('((d - r) % (c-1) !== 0) adevărat => invalid', () => {
//             expect(ex1.rezolvare(5, 2, 15)).to.eql(["input invalid", null]);
//         });

//         it('d/c <= r adevărat => invalid', () => {
//             expect(ex1.rezolvare(2, 5, 8)).to.eql(["input invalid", null]);
//         });

//         it('Testează că d/c > r (condiția falsă)', () => {
//             expect(ex1.rezolvare(3, 1, 8)).to.eql([12, 4]);
//         });
//     });
// });