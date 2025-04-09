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
          // /*8*/            Ex1.rezultat_corect1 = a_corect, b_corect;
          Ex1.rezultat_corect1 = stryMutAct_9fa48("55") ? [] : (stryCov_9fa48("55"), [a_corect, b_corect]);
        }
      }

      /*9*/
      if (stryMutAct_9fa48("58") ? a === a_corect || b === b_corect : stryMutAct_9fa48("57") ? false : stryMutAct_9fa48("56") ? true : (stryCov_9fa48("56", "57", "58"), (stryMutAct_9fa48("60") ? a !== a_corect : stryMutAct_9fa48("59") ? true : (stryCov_9fa48("59", "60"), a === a_corect)) && (stryMutAct_9fa48("62") ? b !== b_corect : stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61", "62"), b === b_corect)))) {
        if (stryMutAct_9fa48("63")) {
          {}
        } else {
          stryCov_9fa48("63");
          /*10*/return stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), "Răspuns corect!");
        }
      }
      /*11*/
      else if (stryMutAct_9fa48("67") ? a_corect !== "input invalid" : stryMutAct_9fa48("66") ? false : stryMutAct_9fa48("65") ? true : (stryCov_9fa48("65", "66", "67"), a_corect === (stryMutAct_9fa48("68") ? "" : (stryCov_9fa48("68"), "input invalid")))) {
        if (stryMutAct_9fa48("69")) {
          {}
        } else {
          stryCov_9fa48("69");
          /*12*/return stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), "Date invalide! Recitiți restricțiile.");
        }
      }
      /*13*/
      else {
        if (stryMutAct_9fa48("71")) {
          {}
        } else {
          stryCov_9fa48("71");
          /*14*/if (stryMutAct_9fa48("74") ? Ex1.rezultat_corect1 === Ex1.rezultat_corect2 && Ex1.rezultat_corect2 === Ex1.rezultat_corect3 && Ex1.rezultat_corect2 === Ex1.rezultat_corect1 : stryMutAct_9fa48("73") ? false : stryMutAct_9fa48("72") ? true : (stryCov_9fa48("72", "73", "74"), (stryMutAct_9fa48("76") ? Ex1.rezultat_corect1 === Ex1.rezultat_corect2 || Ex1.rezultat_corect2 === Ex1.rezultat_corect3 : stryMutAct_9fa48("75") ? false : (stryCov_9fa48("75", "76"), (stryMutAct_9fa48("78") ? Ex1.rezultat_corect1 !== Ex1.rezultat_corect2 : stryMutAct_9fa48("77") ? true : (stryCov_9fa48("77", "78"), Ex1.rezultat_corect1 === Ex1.rezultat_corect2)) && (stryMutAct_9fa48("80") ? Ex1.rezultat_corect2 !== Ex1.rezultat_corect3 : stryMutAct_9fa48("79") ? true : (stryCov_9fa48("79", "80"), Ex1.rezultat_corect2 === Ex1.rezultat_corect3)))) || (stryMutAct_9fa48("82") ? Ex1.rezultat_corect2 !== Ex1.rezultat_corect1 : stryMutAct_9fa48("81") ? false : (stryCov_9fa48("81", "82"), Ex1.rezultat_corect2 === Ex1.rezultat_corect1)))) {
            if (stryMutAct_9fa48("83")) {
              {}
            } else {
              stryCov_9fa48("83");
              /*15*/stryMutAct_9fa48("84") ? Ex1.count-- : (stryCov_9fa48("84"), Ex1.count++);
            }
          }
          /*16*/
          else {
            if (stryMutAct_9fa48("85")) {
              {}
            } else {
              stryCov_9fa48("85");
              /*17*/if (stryMutAct_9fa48("88") ? Ex1.count === 1 : stryMutAct_9fa48("87") ? false : stryMutAct_9fa48("86") ? true : (stryCov_9fa48("86", "87", "88"), Ex1.count !== 1)) /*18*/Ex1.count = 1;
            }
          }

          /*19*/
          if (stryMutAct_9fa48("92") ? Ex1.count < 3 : stryMutAct_9fa48("91") ? Ex1.count > 3 : stryMutAct_9fa48("90") ? false : stryMutAct_9fa48("89") ? true : (stryCov_9fa48("89", "90", "91", "92"), Ex1.count >= 3)) {
            if (stryMutAct_9fa48("93")) {
              {}
            } else {
              stryCov_9fa48("93");
              /*20*/return (stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), 'Ați depășit numărul maxim de încercări. Rezultatul corect este ')) + a_corect + (stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), ' și ')) + b_corect;
            }
          }

          /*21*/
          return stryMutAct_9fa48("96") ? "" : (stryCov_9fa48("96"), "Răspuns greșit! Mai încearcă :)");
        }
      }
    }
  }
  butoane() {
    if (stryMutAct_9fa48("97")) {
      {}
    } else {
      stryCov_9fa48("97");
      const btn_trimite = document.getElementById(stryMutAct_9fa48("98") ? "" : (stryCov_9fa48("98"), "trimite"));
      const btn_rasp = document.getElementById(stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), "rasp-corect"));
      let inputuri;
      btn_trimite.addEventListener(stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), "click"), function () {
        if (stryMutAct_9fa48("101")) {
          {}
        } else {
          stryCov_9fa48("101");
          let c = parseInt(document.getElementById(stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), "cat")).value);
          let r = parseInt(document.getElementById(stryMutAct_9fa48("103") ? "" : (stryCov_9fa48("103"), "rest")).value);
          let d = parseInt(document.getElementById(stryMutAct_9fa48("104") ? "" : (stryCov_9fa48("104"), "diferenta")).value);
          let a = parseInt(document.getElementById(stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), "rasp-a")).value);
          let b = parseInt(document.getElementById(stryMutAct_9fa48("106") ? "" : (stryCov_9fa48("106"), "rasp-b")).value);
          const exercitiu = new Ex1();
          alert(exercitiu.verificare(c, r, d, a, b));
        }
      });
      btn_rasp.addEventListener(stryMutAct_9fa48("107") ? "" : (stryCov_9fa48("107"), "click"), function () {
        if (stryMutAct_9fa48("108")) {
          {}
        } else {
          stryCov_9fa48("108");
          let c = parseInt(document.getElementById(stryMutAct_9fa48("109") ? "" : (stryCov_9fa48("109"), "cat")).value);
          let r = parseInt(document.getElementById(stryMutAct_9fa48("110") ? "" : (stryCov_9fa48("110"), "rest")).value);
          let d = parseInt(document.getElementById(stryMutAct_9fa48("111") ? "" : (stryCov_9fa48("111"), "diferenta")).value);
          const exercitiu = new Ex1();
          let [a_corect, b_corect] = stryMutAct_9fa48("114") ? exercitiu.rezolvare(c, r, d) && [null, null] : stryMutAct_9fa48("113") ? false : stryMutAct_9fa48("112") ? true : (stryCov_9fa48("112", "113", "114"), exercitiu.rezolvare(c, r, d) || (stryMutAct_9fa48("115") ? [] : (stryCov_9fa48("115"), [null, null]))); // ✅ Works now
          if (stryMutAct_9fa48("118") ? a_corect !== "input invalid" : stryMutAct_9fa48("117") ? false : stryMutAct_9fa48("116") ? true : (stryCov_9fa48("116", "117", "118"), a_corect === (stryMutAct_9fa48("119") ? "" : (stryCov_9fa48("119"), "input invalid")))) {
            if (stryMutAct_9fa48("120")) {
              {}
            } else {
              stryCov_9fa48("120");
              showAlert(stryMutAct_9fa48("121") ? `` : (stryCov_9fa48("121"), `Input invalid`));
            }
          } else {
            if (stryMutAct_9fa48("122")) {
              {}
            } else {
              stryCov_9fa48("122");
              showAlert(stryMutAct_9fa48("123") ? `` : (stryCov_9fa48("123"), `Răspunsul corect este ${a_corect} și ${b_corect}`));
            }
          }
        }
      }.bind(this)); // ✅ Bind `this` correctly

      function handleKeyPress(event) {
        if (stryMutAct_9fa48("124")) {
          {}
        } else {
          stryCov_9fa48("124");
          if (stryMutAct_9fa48("127") ? event.keyCode !== 13 : stryMutAct_9fa48("126") ? false : stryMutAct_9fa48("125") ? true : (stryCov_9fa48("125", "126", "127"), event.keyCode === 13)) {
            if (stryMutAct_9fa48("128")) {
              {}
            } else {
              stryCov_9fa48("128");
              document.getElementById(stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), "trimite")).click();
              document.getElementById(stryMutAct_9fa48("130") ? "" : (stryCov_9fa48("130"), "rasp-corect")).click();
            }
          }
        }
      }
      document.onkeydown = handleKeyPress;
    }
  }
}
module.exports = Ex1;