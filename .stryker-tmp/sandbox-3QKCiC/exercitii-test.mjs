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
    // console.log('ex1');
  }
  static count = 0;
  static rezultat_corect1 = stryMutAct_9fa48("0") ? +100000 : (stryCov_9fa48("0"), -100000);
  static rezultat_corect2 = stryMutAct_9fa48("1") ? +100000 : (stryCov_9fa48("1"), -100000);
  static rezultat_corect3 = stryMutAct_9fa48("2") ? +100000 : (stryCov_9fa48("2"), -100000);
  rezolvare(c, r, d) {
    if (stryMutAct_9fa48("3")) {
      {}
    } else {
      stryCov_9fa48("3");
      // if (
      //     c < 2 ||
      //     d <= r ||
      //     r < 0 ||
      //     (d - r) % (c - 1) !== 0 
      //       || d/c <= r
      // ) {
      //     return ["input invalid", null];
      // }

      if (stryMutAct_9fa48("7") ? c >= 2 : stryMutAct_9fa48("6") ? c <= 2 : stryMutAct_9fa48("5") ? false : stryMutAct_9fa48("4") ? true : (stryCov_9fa48("4", "5", "6", "7"), c < 2)) return stryMutAct_9fa48("8") ? [] : (stryCov_9fa48("8"), [stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), "input invalid"), null]);
      if (stryMutAct_9fa48("13") ? d > r : stryMutAct_9fa48("12") ? d < r : stryMutAct_9fa48("11") ? false : stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10", "11", "12", "13"), d <= r)) return stryMutAct_9fa48("14") ? [] : (stryCov_9fa48("14"), [stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), "input invalid"), null]);
      if (stryMutAct_9fa48("19") ? r >= 0 : stryMutAct_9fa48("18") ? r <= 0 : stryMutAct_9fa48("17") ? false : stryMutAct_9fa48("16") ? true : (stryCov_9fa48("16", "17", "18", "19"), r < 0)) return stryMutAct_9fa48("20") ? [] : (stryCov_9fa48("20"), [stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), "input invalid"), null]);
      if (stryMutAct_9fa48("24") ? (d - r) % (c - 1) === 0 : stryMutAct_9fa48("23") ? false : stryMutAct_9fa48("22") ? true : (stryCov_9fa48("22", "23", "24"), (stryMutAct_9fa48("25") ? (d - r) * (c - 1) : (stryCov_9fa48("25"), (stryMutAct_9fa48("26") ? d + r : (stryCov_9fa48("26"), d - r)) % (stryMutAct_9fa48("27") ? c + 1 : (stryCov_9fa48("27"), c - 1)))) !== 0)) return stryMutAct_9fa48("28") ? [] : (stryCov_9fa48("28"), [stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), "input invalid"), null]);
      if (stryMutAct_9fa48("33") ? d / c > r : stryMutAct_9fa48("32") ? d / c < r : stryMutAct_9fa48("31") ? false : stryMutAct_9fa48("30") ? true : (stryCov_9fa48("30", "31", "32", "33"), (stryMutAct_9fa48("34") ? d * c : (stryCov_9fa48("34"), d / c)) <= r)) return stryMutAct_9fa48("35") ? [] : (stryCov_9fa48("35"), [stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), "input invalid"), null]);
      let b = stryMutAct_9fa48("37") ? (d - r) * (c - 1) : (stryCov_9fa48("37"), (stryMutAct_9fa48("38") ? d + r : (stryCov_9fa48("38"), d - r)) / (stryMutAct_9fa48("39") ? c + 1 : (stryCov_9fa48("39"), c - 1)));
      let a = stryMutAct_9fa48("40") ? d - b : (stryCov_9fa48("40"), d + b);
      return stryMutAct_9fa48("41") ? [] : (stryCov_9fa48("41"), [a, b]);
    }
  }
  verificare(c, r, d, a, b) {
    if (stryMutAct_9fa48("42")) {
      {}
    } else {
      stryCov_9fa48("42");
      // let [a_corect, b_corect] = this.rezolvare(c, r, d) || [null, null];
      let rezultat = this.rezolvare(c, r, d);
      let a_corect = null;
      let b_corect = null;
      if (stryMutAct_9fa48("45") ? Array.isArray(rezultat) || rezultat.length === 2 : stryMutAct_9fa48("44") ? false : stryMutAct_9fa48("43") ? true : (stryCov_9fa48("43", "44", "45"), Array.isArray(rezultat) && (stryMutAct_9fa48("47") ? rezultat.length !== 2 : stryMutAct_9fa48("46") ? true : (stryCov_9fa48("46", "47"), rezultat.length === 2)))) {
        if (stryMutAct_9fa48("48")) {
          {}
        } else {
          stryCov_9fa48("48");
          [a_corect, b_corect] = rezultat;
        }
      }

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
          Ex1.rezultat_corect1 = a_corect;
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
      else if (stryMutAct_9fa48("66") ? a_corect === "input invalid" && a_corect == null : stryMutAct_9fa48("65") ? false : stryMutAct_9fa48("64") ? true : (stryCov_9fa48("64", "65", "66"), (stryMutAct_9fa48("68") ? a_corect !== "input invalid" : stryMutAct_9fa48("67") ? false : (stryCov_9fa48("67", "68"), a_corect === (stryMutAct_9fa48("69") ? "" : (stryCov_9fa48("69"), "input invalid")))) || (stryMutAct_9fa48("71") ? a_corect != null : stryMutAct_9fa48("70") ? false : (stryCov_9fa48("70", "71"), a_corect == null)))) {
        if (stryMutAct_9fa48("72")) {
          {}
        } else {
          stryCov_9fa48("72");
          /*12*/return stryMutAct_9fa48("73") ? "" : (stryCov_9fa48("73"), "Date invalide! Recitiți restricțiile.");
        }
      }
      /*13*/
      else {
        if (stryMutAct_9fa48("74")) {
          {}
        } else {
          stryCov_9fa48("74");
          /*14*/if (stryMutAct_9fa48("77") ? Ex1.rezultat_corect1 === Ex1.rezultat_corect2 && Ex1.rezultat_corect2 === Ex1.rezultat_corect3 && Ex1.rezultat_corect2 === Ex1.rezultat_corect1 : stryMutAct_9fa48("76") ? false : stryMutAct_9fa48("75") ? true : (stryCov_9fa48("75", "76", "77"), (stryMutAct_9fa48("79") ? Ex1.rezultat_corect1 === Ex1.rezultat_corect2 || Ex1.rezultat_corect2 === Ex1.rezultat_corect3 : stryMutAct_9fa48("78") ? false : (stryCov_9fa48("78", "79"), (stryMutAct_9fa48("81") ? Ex1.rezultat_corect1 !== Ex1.rezultat_corect2 : stryMutAct_9fa48("80") ? true : (stryCov_9fa48("80", "81"), Ex1.rezultat_corect1 === Ex1.rezultat_corect2)) && (stryMutAct_9fa48("83") ? Ex1.rezultat_corect2 !== Ex1.rezultat_corect3 : stryMutAct_9fa48("82") ? true : (stryCov_9fa48("82", "83"), Ex1.rezultat_corect2 === Ex1.rezultat_corect3)))) || (stryMutAct_9fa48("85") ? Ex1.rezultat_corect2 !== Ex1.rezultat_corect1 : stryMutAct_9fa48("84") ? false : (stryCov_9fa48("84", "85"), Ex1.rezultat_corect2 === Ex1.rezultat_corect1)))) {
            if (stryMutAct_9fa48("86")) {
              {}
            } else {
              stryCov_9fa48("86");
              /*15*/stryMutAct_9fa48("87") ? Ex1.count-- : (stryCov_9fa48("87"), Ex1.count++);
            }
          }
          /*16*/
          else {
            if (stryMutAct_9fa48("88")) {
              {}
            } else {
              stryCov_9fa48("88");
              /*17*/if (stryMutAct_9fa48("91") ? Ex1.count === 1 : stryMutAct_9fa48("90") ? false : stryMutAct_9fa48("89") ? true : (stryCov_9fa48("89", "90", "91"), Ex1.count !== 1)) /*18*/Ex1.count = 1;
            }
          }

          /*19*/
          if (stryMutAct_9fa48("95") ? Ex1.count < 3 : stryMutAct_9fa48("94") ? Ex1.count > 3 : stryMutAct_9fa48("93") ? false : stryMutAct_9fa48("92") ? true : (stryCov_9fa48("92", "93", "94", "95"), Ex1.count >= 3)) {
            if (stryMutAct_9fa48("96")) {
              {}
            } else {
              stryCov_9fa48("96");
              /*20*/return (stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), 'Ați depășit numărul maxim de încercări. Rezultatul corect este ')) + a_corect + (stryMutAct_9fa48("98") ? "" : (stryCov_9fa48("98"), ' și ')) + b_corect;
            }
          }

          /*21*/
          return stryMutAct_9fa48("99") ? "" : (stryCov_9fa48("99"), "Răspuns greșit! Mai încearcă :)");
        }
      }
    }
  }
}
export default Ex1;