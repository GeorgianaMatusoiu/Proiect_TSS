// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class Ex1 {
  constructor() {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      console.log(stryMutAct_9fa48("1") ? "" : (stryCov_9fa48("1"), 'ex1'));
    }
  }
  static count = 0;
  static rezultat_corect1 = stryMutAct_9fa48("2") ? +100000 : (stryCov_9fa48("2"), -100000);
  static rezultat_corect2 = stryMutAct_9fa48("3") ? +100000 : (stryCov_9fa48("3"), -100000);
  static rezultat_corect3 = stryMutAct_9fa48("4") ? +100000 : (stryCov_9fa48("4"), -100000);
  rezolvare(c, r, d) {
    if (stryMutAct_9fa48("5")) {
      {}
    } else {
      stryCov_9fa48("5");
      // if (
      //     c < 2 ||
      //     d <= r ||
      //     r < 0 ||
      //     (d - r) % (c - 1) !== 0 
      //       || d/c <= r
      // ) {
      //     return ["input invalid", null];
      // }
      if (stryMutAct_9fa48("9") ? c >= 2 : stryMutAct_9fa48("8") ? c <= 2 : stryMutAct_9fa48("7") ? false : stryMutAct_9fa48("6") ? true : (stryCov_9fa48("6", "7", "8", "9"), c < 2)) return stryMutAct_9fa48("10") ? [] : (stryCov_9fa48("10"), [stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), "input invalid"), null]);
      if (stryMutAct_9fa48("15") ? d > r : stryMutAct_9fa48("14") ? d < r : stryMutAct_9fa48("13") ? false : stryMutAct_9fa48("12") ? true : (stryCov_9fa48("12", "13", "14", "15"), d <= r)) return stryMutAct_9fa48("16") ? [] : (stryCov_9fa48("16"), [stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), "input invalid"), null]);
      if (stryMutAct_9fa48("21") ? r >= 0 : stryMutAct_9fa48("20") ? r <= 0 : stryMutAct_9fa48("19") ? false : stryMutAct_9fa48("18") ? true : (stryCov_9fa48("18", "19", "20", "21"), r < 0)) return stryMutAct_9fa48("22") ? [] : (stryCov_9fa48("22"), [stryMutAct_9fa48("23") ? "" : (stryCov_9fa48("23"), "input invalid"), null]);
      if (stryMutAct_9fa48("26") ? (d - r) % (c - 1) === 0 : stryMutAct_9fa48("25") ? false : stryMutAct_9fa48("24") ? true : (stryCov_9fa48("24", "25", "26"), (stryMutAct_9fa48("27") ? (d - r) * (c - 1) : (stryCov_9fa48("27"), (stryMutAct_9fa48("28") ? d + r : (stryCov_9fa48("28"), d - r)) % (stryMutAct_9fa48("29") ? c + 1 : (stryCov_9fa48("29"), c - 1)))) !== 0)) return stryMutAct_9fa48("30") ? [] : (stryCov_9fa48("30"), [stryMutAct_9fa48("31") ? "" : (stryCov_9fa48("31"), "input invalid"), null]);
      if (stryMutAct_9fa48("35") ? d / c > r : stryMutAct_9fa48("34") ? d / c < r : stryMutAct_9fa48("33") ? false : stryMutAct_9fa48("32") ? true : (stryCov_9fa48("32", "33", "34", "35"), (stryMutAct_9fa48("36") ? d * c : (stryCov_9fa48("36"), d / c)) <= r)) return stryMutAct_9fa48("37") ? [] : (stryCov_9fa48("37"), [stryMutAct_9fa48("38") ? "" : (stryCov_9fa48("38"), "input invalid"), null]);
      let b = stryMutAct_9fa48("39") ? (d - r) * (c - 1) : (stryCov_9fa48("39"), (stryMutAct_9fa48("40") ? d + r : (stryCov_9fa48("40"), d - r)) / (stryMutAct_9fa48("41") ? c + 1 : (stryCov_9fa48("41"), c - 1)));
      let a = stryMutAct_9fa48("42") ? d - b : (stryCov_9fa48("42"), d + b);
      return stryMutAct_9fa48("43") ? [] : (stryCov_9fa48("43"), [a, b]);
    }
  }
  verificare(c, r, d, a, b) {
    if (stryMutAct_9fa48("44")) {
      {}
    } else {
      stryCov_9fa48("44");
      let [a_corect, b_corect] = stryMutAct_9fa48("47") ? this.rezolvare(c, r, d) && [null, null] : stryMutAct_9fa48("46") ? false : stryMutAct_9fa48("45") ? true : (stryCov_9fa48("45", "46", "47"), this.rezolvare(c, r, d) || (stryMutAct_9fa48("48") ? [] : (stryCov_9fa48("48"), [null, null])));

      /*1*/
      if (stryMutAct_9fa48("52") ? Ex1.rezultat_corect3 >= 0 : stryMutAct_9fa48("51") ? Ex1.rezultat_corect3 <= 0 : stryMutAct_9fa48("50") ? false : stryMutAct_9fa48("49") ? true : (stryCov_9fa48("49", "50", "51", "52"), Ex1.rezultat_corect3 < 0)) {
        if (stryMutAct_9fa48("53")) {
          {}
        } else {
          stryCov_9fa48("53");
          /*2*/Ex1.rezultat_corect3 = a_corect;
          /*3*/
          Ex1.rezultat_corect2 = a_corect;
          /*4*/
          Ex1.rezultat_corect1 = a_corect;
        }
      }
      /*5*/
      else {
        if (stryMutAct_9fa48("54")) {
          {}
        } else {
          stryCov_9fa48("54");
          /*6*/Ex1.rezultat_corect3 = Ex1.rezultat_corect2;
          /*7*/
          Ex1.rezultat_corect2 = Ex1.rezultat_corect1;
          Ex1.rezultat_corect1 = a_corect, b_corect;
          // Ex1.rezultat_corect1 = [a_corect, b_corect];
        }
      }

      /*9*/
      if (stryMutAct_9fa48("57") ? a === a_corect || b === b_corect : stryMutAct_9fa48("56") ? false : stryMutAct_9fa48("55") ? true : (stryCov_9fa48("55", "56", "57"), (stryMutAct_9fa48("59") ? a !== a_corect : stryMutAct_9fa48("58") ? true : (stryCov_9fa48("58", "59"), a === a_corect)) && (stryMutAct_9fa48("61") ? b !== b_corect : stryMutAct_9fa48("60") ? true : (stryCov_9fa48("60", "61"), b === b_corect)))) {
        if (stryMutAct_9fa48("62")) {
          {}
        } else {
          stryCov_9fa48("62");
          /*10*/return stryMutAct_9fa48("63") ? "" : (stryCov_9fa48("63"), "Răspuns corect!");
        }
      }
      /*11*/
      else if (stryMutAct_9fa48("66") ? a_corect !== "input invalid" : stryMutAct_9fa48("65") ? false : stryMutAct_9fa48("64") ? true : (stryCov_9fa48("64", "65", "66"), a_corect === (stryMutAct_9fa48("67") ? "" : (stryCov_9fa48("67"), "input invalid")))) {
        if (stryMutAct_9fa48("68")) {
          {}
        } else {
          stryCov_9fa48("68");
          /*12*/return stryMutAct_9fa48("69") ? "" : (stryCov_9fa48("69"), "Date invalide! Recitiți restricțiile.");
        }
      }
      /*13*/
      else {
        if (stryMutAct_9fa48("70")) {
          {}
        } else {
          stryCov_9fa48("70");
          /*14*/if (stryMutAct_9fa48("73") ? Ex1.rezultat_corect1 === Ex1.rezultat_corect2 && Ex1.rezultat_corect2 === Ex1.rezultat_corect3 && Ex1.rezultat_corect2 === Ex1.rezultat_corect1 : stryMutAct_9fa48("72") ? false : stryMutAct_9fa48("71") ? true : (stryCov_9fa48("71", "72", "73"), (stryMutAct_9fa48("75") ? Ex1.rezultat_corect1 === Ex1.rezultat_corect2 || Ex1.rezultat_corect2 === Ex1.rezultat_corect3 : stryMutAct_9fa48("74") ? false : (stryCov_9fa48("74", "75"), (stryMutAct_9fa48("77") ? Ex1.rezultat_corect1 !== Ex1.rezultat_corect2 : stryMutAct_9fa48("76") ? true : (stryCov_9fa48("76", "77"), Ex1.rezultat_corect1 === Ex1.rezultat_corect2)) && (stryMutAct_9fa48("79") ? Ex1.rezultat_corect2 !== Ex1.rezultat_corect3 : stryMutAct_9fa48("78") ? true : (stryCov_9fa48("78", "79"), Ex1.rezultat_corect2 === Ex1.rezultat_corect3)))) || (stryMutAct_9fa48("81") ? Ex1.rezultat_corect2 !== Ex1.rezultat_corect1 : stryMutAct_9fa48("80") ? false : (stryCov_9fa48("80", "81"), Ex1.rezultat_corect2 === Ex1.rezultat_corect1)))) {
            if (stryMutAct_9fa48("82")) {
              {}
            } else {
              stryCov_9fa48("82");
              /*15*/stryMutAct_9fa48("83") ? Ex1.count-- : (stryCov_9fa48("83"), Ex1.count++);
            }
          }
          /*16*/
          else {
            if (stryMutAct_9fa48("84")) {
              {}
            } else {
              stryCov_9fa48("84");
              /*17*/if (stryMutAct_9fa48("87") ? Ex1.count === 1 : stryMutAct_9fa48("86") ? false : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86", "87"), Ex1.count !== 1)) /*18*/Ex1.count = 1;
            }
          }

          /*19*/
          if (stryMutAct_9fa48("91") ? Ex1.count < 3 : stryMutAct_9fa48("90") ? Ex1.count > 3 : stryMutAct_9fa48("89") ? false : stryMutAct_9fa48("88") ? true : (stryCov_9fa48("88", "89", "90", "91"), Ex1.count >= 3)) {
            if (stryMutAct_9fa48("92")) {
              {}
            } else {
              stryCov_9fa48("92");
              /*20*/return (stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), 'Ați depășit numărul maxim de încercări. Rezultatul corect este ')) + a_corect + (stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), ' și ')) + b_corect;
            }
          }

          /*21*/
          return stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), "Răspuns greșit! Mai încearcă :)");
        }
      }
    }
  }
  butoane() {
    if (stryMutAct_9fa48("96")) {
      {}
    } else {
      stryCov_9fa48("96");
      const btn_trimite = document.getElementById(stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), "trimite"));
      const btn_rasp = document.getElementById(stryMutAct_9fa48("98") ? "" : (stryCov_9fa48("98"), "rasp-corect"));
      let inputuri;
      btn_trimite.addEventListener(stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), "click"), function () {
        if (stryMutAct_9fa48("100")) {
          {}
        } else {
          stryCov_9fa48("100");
          let c = parseInt(document.getElementById(stryMutAct_9fa48("101") ? "" : (stryCov_9fa48("101"), "cat")).value);
          let r = parseInt(document.getElementById(stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), "rest")).value);
          let d = parseInt(document.getElementById(stryMutAct_9fa48("103") ? "" : (stryCov_9fa48("103"), "diferenta")).value);
          let a = parseInt(document.getElementById(stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), "rasp-a")).value);
          let b = parseInt(document.getElementById(stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), "rasp-b")).value);
          const exercitiu = new Ex1();
          alert(exercitiu.verificare(c, r, d, a, b));
        }
      });
      btn_rasp.addEventListener(stryMutAct_9fa48("106") ? "" : (stryCov_9fa48("106"), "click"), function () {
        if (stryMutAct_9fa48("107")) {
          {}
        } else {
          stryCov_9fa48("107");
          let c = parseInt(document.getElementById(stryMutAct_9fa48("108") ? "" : (stryCov_9fa48("108"), "cat")).value);
          let r = parseInt(document.getElementById(stryMutAct_9fa48("109") ? "" : (stryCov_9fa48("109"), "rest")).value);
          let d = parseInt(document.getElementById(stryMutAct_9fa48("110") ? "" : (stryCov_9fa48("110"), "diferenta")).value);
          const exercitiu = new Ex1();
          let [a_corect, b_corect] = stryMutAct_9fa48("113") ? exercitiu.rezolvare(c, r, d) && [null, null] : stryMutAct_9fa48("112") ? false : stryMutAct_9fa48("111") ? true : (stryCov_9fa48("111", "112", "113"), exercitiu.rezolvare(c, r, d) || (stryMutAct_9fa48("114") ? [] : (stryCov_9fa48("114"), [null, null]))); // ✅ Works now
          if (stryMutAct_9fa48("117") ? a_corect !== "input invalid" : stryMutAct_9fa48("116") ? false : stryMutAct_9fa48("115") ? true : (stryCov_9fa48("115", "116", "117"), a_corect === (stryMutAct_9fa48("118") ? "" : (stryCov_9fa48("118"), "input invalid")))) {
            if (stryMutAct_9fa48("119")) {
              {}
            } else {
              stryCov_9fa48("119");
              showAlert(stryMutAct_9fa48("120") ? `` : (stryCov_9fa48("120"), `Input invalid`));
            }
          } else {
            if (stryMutAct_9fa48("121")) {
              {}
            } else {
              stryCov_9fa48("121");
              showAlert(stryMutAct_9fa48("122") ? `` : (stryCov_9fa48("122"), `Răspunsul corect este ${a_corect} și ${b_corect}`));
            }
          }
        }
      }.bind(this)); // ✅ Bind `this` correctly

      function handleKeyPress(event) {
        if (stryMutAct_9fa48("123")) {
          {}
        } else {
          stryCov_9fa48("123");
          if (stryMutAct_9fa48("126") ? event.keyCode !== 13 : stryMutAct_9fa48("125") ? false : stryMutAct_9fa48("124") ? true : (stryCov_9fa48("124", "125", "126"), event.keyCode === 13)) {
            if (stryMutAct_9fa48("127")) {
              {}
            } else {
              stryCov_9fa48("127");
              document.getElementById(stryMutAct_9fa48("128") ? "" : (stryCov_9fa48("128"), "trimite")).click();
              document.getElementById(stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), "rasp-corect")).click();
            }
          }
        }
      }
      document.onkeydown = handleKeyPress;
    }
  }
}
module.exports = Ex1;