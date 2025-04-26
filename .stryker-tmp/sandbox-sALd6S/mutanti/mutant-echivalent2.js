// @ts-nocheck
class Ex1 {
    constructor() {
        // console.log('ex1');
    }

    static count = 0;
    static rezultat_corect1 = -100000;
    static rezultat_corect2 = -100000;
    static rezultat_corect3 = -100000;

    rezolvare(c, r, d) {
        if (c <= 1) return ["input invalid", null];
        if (d <= r) return ["input invalid", null];
        if (r < 0) return ["input invalid", null];
        if ((d - r) % (c - 1) !== 0) return ["input invalid", null];
        if (d / c <= r) return ["input invalid", null];
        let b = (d - r) / (c - 1);

        let a = d + b;

        return [a, b];
    }

    verificare(c, r, d, a, b) {
        let [a_corect, b_corect] = this.rezolvare(c, r, d) || [null, null];

/*1*/       if (Ex1.rezultat_corect3 < 0) {
/*2*/           Ex1.rezultat_corect3 = a_corect;
/*3*/           Ex1.rezultat_corect2 = a_corect;
/*4*/           Ex1.rezultat_corect1 = a_corect;
        }
/*5*/       else {
/*6*/            Ex1.rezultat_corect3 = Ex1.rezultat_corect2;
/*7*/            Ex1.rezultat_corect2 = Ex1.rezultat_corect1;
            Ex1.rezultat_corect1 = a_corect;
            //  Ex1.rezultat_corect1 = a_corect, b_corect;
            // Ex1.rezultat_corect1 = [a_corect, b_corect];

        }

/*9*/       if (a === a_corect && b === b_corect) {
/*10*/          return "Răspuns corect!";
        }
/*11*/      else if (a_corect === "input invalid") {
/*12*/          return "Date invalide! Recitiți restricțiile.";
        }
/*13*/      else {
/*14*/       if ((Ex1.rezultat_corect1 === Ex1.rezultat_corect2 && Ex1.rezultat_corect2 === Ex1.rezultat_corect3) || (Ex1.rezultat_corect2 === Ex1.rezultat_corect1)) {
/*15*/               Ex1.count++;
            }
/*16*/       else {
/*17*/                 if (Ex1.count !== 1)
/*18*/                   Ex1.count = 1;
            }

/*19*/       if (Ex1.count >= 3) {
/*20*/          return 'Ați depășit numărul maxim de încercări. Rezultatul corect este ' + a_corect + ' și ' + b_corect;
            }

/*21*/       return "Răspuns greșit! Mai încearcă :)";
        }
    }


}
export default Ex1;

// module.exports = Ex1;
