import Ex1 from "./exercitii-test.js";

export function setupUI() {
    const btn_trimite = document.getElementById("trimite");
    const btn_rasp = document.getElementById("rasp-corect");

    btn_trimite.addEventListener("click", function () {
        let c = parseInt(document.getElementById("cat").value);
        let r = parseInt(document.getElementById("rest").value);
        let d = parseInt(document.getElementById("diferenta").value);
        let a = parseInt(document.getElementById("rasp-a").value);
        let b = parseInt(document.getElementById("rasp-b").value);

        const exercitiu = new Ex1();
        alert(exercitiu.verificare(c, r, d, a, b));
    });

    btn_rasp.addEventListener("click", function () {
        let c = parseInt(document.getElementById("cat").value);
        let r = parseInt(document.getElementById("rest").value);
        let d = parseInt(document.getElementById("diferenta").value);

        const exercitiu = new Ex1();
        let [a_corect, b_corect] = exercitiu.rezolvare(c, r, d) || [null, null];
        if (a_corect === "input invalid") {
            showAlert(`Input invalid`);
        } else {
            showAlert(`Răspunsul corect este ${a_corect} și ${b_corect}`);
        }
    });

    function handleKeyPress(event) {
        if (event.keyCode === 13) {
            document.getElementById("trimite").click();
            document.getElementById("rasp-corect").click();
        }
    }

    document.onkeydown = handleKeyPress;
}
