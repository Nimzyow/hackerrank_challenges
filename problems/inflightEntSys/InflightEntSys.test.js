const inflightEntSys = require("./InflightEntSys");

describe("inflight Entertainment System", () => {
  describe("should return false when flight time is", () => {
    it("60 minutes and two films of 20 minutes are passed through", () => {
      const result = inflightEntSys(60, [20, 20]);
      expect(result).toEqual(false);
    });
    it("60 minutes and 1 film of 20 minutes, 1 film of 30 minutes and 1 film of 60 minutes are passed through", () => {
      const result = inflightEntSys(60, [20, 30, 60]);
      expect(result).toEqual(false);
    });
    it("120 minutes and 1 film of 80 minutes, 1 film of 30 minutes and 1 film of 60 minutes are passed through", () => {
      const result = inflightEntSys(120, [80, 30, 60]);
      expect(result).toEqual(false);
    });
    it("200 minutes and 3 films of 30 minutes, 1 film of 50 minutes and 1 film of 140 minutes are passed through", () => {
      const result = inflightEntSys(200, [30, 30, 30, 50, 140]);
      expect(result).toEqual(false);
    });
    describe("should return true when flight time is", () => {
      it("60 minutes and two films of 30 minutes are passed through", () => {
        const result = inflightEntSys(60, [20, 40]);
        expect(result).toEqual(true);
      });
      it("90 minutes and 2 films of 30 minutes and 1 film of 60 minutes are passed through", () => {
        const result = inflightEntSys(90, [30, 30, 60]);
        expect(result).toEqual(true);
      });
      it("200 minutes and 3 films of 30 minutes, 1 film of 60 minutes and 1 film of 140 minutes are passed through", () => {
        const result = inflightEntSys(200, [30, 40, 50, 60, 140]);
        expect(result).toEqual(true);
      });
      it("5 minutes and 1 film of 4 another of 3 and another of 2", () => {
        const result = inflightEntSys(5, [4, 3, 2]);
        expect(result).toEqual(true);
      });
    });
  });
});
