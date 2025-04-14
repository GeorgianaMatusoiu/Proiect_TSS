class Ex1 {
    constructor() {}

    static count = 0;
    static rezultat_corect1 = -100000;
    static rezultat_corect2 = -100000;
    static rezultat_corect3 = -100000;

    rezolvare(c, r, d) {
        if (c < 2) return ["input invalid", null];

        //  Mutant 1: `d <= r` → `d < r`
        if (d < r) return ["input invalid", null];

        //  Mutant 2: comentăm verificarea `r < 0` (eliminată)
        // if (r < 0) return ["input invalid", null];

        if ((d - r) % (c - 1) !== 0) return ["input invalid", null];
        if (d / c <= r) return ["input invalid", null];

        let b = (d - r) / (c - 1);
        let a = d + b;

        return [a, b];
    }

    verificare(c, r, d, a, b) {
        let [a_corect, b_corect] = this.rezolvare(c, r, d) || [null, null];

        if (Ex1.rezultat_corect3 < 0) {
            Ex1.rezultat_corect3 = a_corect;
            Ex1.rezultat_corect2 = a_corect;
            Ex1.rezultat_corect1 = a_corect;
        } else {
            Ex1.rezultat_corect3 = Ex1.rezultat_corect2;
            Ex1.rezultat_corect2 = Ex1.rezultat_corect1;
            Ex1.rezultat_corect1 = a_corect;
        }

        if (a === a_corect && b === b_corect) {
            return "Răspuns corect!";
        } else if (a_corect === "input invalid") {
            return "Date invalide! Recitiți restricțiile.";
        } else {
            if (
                (Ex1.rezultat_corect1 === Ex1.rezultat_corect2 &&
                    Ex1.rezultat_corect2 === Ex1.rezultat_corect3) ||
                Ex1.rezultat_corect2 === Ex1.rezultat_corect1
            ) {
                Ex1.count++;
            } else {
                if (Ex1.count !== 1) Ex1.count = 1;
            }

            if (Ex1.count >= 3) {
                return (
                    "Ați depășit numărul maxim de încercări. Rezultatul corect este " +
                    a_corect +
                    " și " +
                    b_corect
                );
            }

            return "Răspuns greșit! Mai încearcă :)";
        }
    }
}

// module.exports = Ex1;
export default Ex1;