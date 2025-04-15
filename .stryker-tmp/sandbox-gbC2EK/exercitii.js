// @ts-nocheck
class Ex1 {
    constructor() {
        console.log('ex1');
    }
    static count = 0;
    static rezultat_corect1 = -100000;
    static rezultat_corect2 = -100000;
    static rezultat_corect3 = -100000;

    rezolvare(c, r, d) {
        if (c < 2 || d <= r || r < 0 || (d - r) % (c - 1) !== 0 || d/c <= r) {
            return ["input invalid", null];
        }
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
/*8*/            Ex1.rezultat_corect1 = a_corect, b_corect;
        }

/*9*/       if (a === a_corect && b === b_corect) {
/*10*/          return "Raspuns corect!";
        }
/*11*/      else if (a_corect === "input invalid") {
/*12*/          return "Date invalide! Recititi restrictiile.";
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

/*21*/       return "Răspuns greșit! Mai incearcă :)";
        }
    }
    butoane() {
        const btn_trimite = document.getElementById("trimite");
        const btn_rasp = document.getElementById("rasp-corect");

        let inputuri;

        btn_trimite.addEventListener("click", function () {
            let c = parseInt(document.getElementById("cat").value);
            let r = parseInt(document.getElementById("rest").value);
            let d = parseInt(document.getElementById("diferenta").value);
            let a = parseInt(document.getElementById("rasp-a").value);
            let b = parseInt(document.getElementById("rasp-b").value);

            const exercitiu = new Ex1();
            showAlert(exercitiu.verificare(c, r, d, a, b));
        });

        btn_rasp.addEventListener("click", function () {
            let c = parseInt(document.getElementById("cat").value);
            let r = parseInt(document.getElementById("rest").value);
            let d = parseInt(document.getElementById("diferenta").value);

            const exercitiu = new Ex1();
            let [a_corect, b_corect] = exercitiu.rezolvare(c, r, d) || [null, null]; 
            if(a_corect === "input invalid"){
                showAlert(`Input invalid`);
            }else{
            showAlert(`Răspunsul corect este ${a_corect} și ${b_corect}`);
            }
        }.bind(this)); 

        function handleKeyPress(event) {
            if (event.keyCode === 13) {
                document.getElementById("trimite").click();
                document.getElementById("rasp-corect").click();
            }
        }

        document.onkeydown = handleKeyPress;

    }

}

function showAlert(message) {
    document.getElementById("alert-message").textContent = message;
    document.getElementById("custom-alert").style.display = "block";
}

function closeAlert() {
    document.getElementById("custom-alert").style.display = "none";
}

window.Ex1 = Ex1;

const ex1 = new Ex1();

ex1.butoane();
