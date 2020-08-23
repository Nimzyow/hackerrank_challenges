"use strict";

var inFlightEntSys = require("./InflightEntSysTwo");

describe("In Flight Entertainment System", function () {
  describe("Has two films whose total runtimes will equal the exact flight length when", function () {
    it("flight time = 120 and two films are of length 60,60", function () {
      var result = inFlightEntSys(120, [60, 60]);
      expect(result).toEqual(true);
    });
    it("flight time = 120 and three films are of length 40, 30,80", function () {
      var result = inFlightEntSys(120, [40, 30, 80]);
      expect(result).toEqual(true);
    });
    it("flight time = 120 and three films are of length 30, 40, 80", function () {
      var result = inFlightEntSys(120, [30, 40, 80]);
      expect(result).toEqual(true);
    });
    it("flight time = 200 and three films are of length 120, 78, 60", function () {
      var result = inFlightEntSys(200, [120, 78, 80]);
      expect(result).toEqual(true);
    });
  });
  describe("Does not have two films whose total runtimes will equal the exact flight length when", function () {
    it("flight time = 120 and two films are of length 60,30", function () {
      var result = inFlightEntSys(120, [60, 30]);
      expect(result).toEqual(false);
    });
    it("flight time = 160 and two films are of length 60, 30, 90, 70", function () {
      var result = inFlightEntSys(160, [60, 30, 90, 50]);
      expect(result).toEqual(false);
    });
  });
});