"use strict";

var MenuDataGenerator = require("./MenuDataGenerator");

describe('Menu data Generator', function () {
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child", "parent1/parent1child2"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child", "parent1child2"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child", "parent1/parent1child2", "parent2/parent2child"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child", "parent1child2"]
    }, {
      title: "parent2",
      data: ["parent2child"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child", "parent1/parent1child2", "parent2/parent2child", "parent2/parent2child2"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child", "parent1child2"]
    }, {
      title: "parent2",
      data: ["parent2child", "parent2child2"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child", "parent1/parent1child2", "parent2/parent2child", "parent2/parent2child2", "parent1/parent1child3"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child", "parent1child2", "parent1child3"]
    }, {
      title: "parent2",
      data: ["parent2child", "parent2child2"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child", "parent1/parent1child2", "parent2/parent2child", "parent2/parent2child2", "parent1/parent1child3", "parent4"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child", "parent1child2", "parent1child3"]
    }, {
      title: "parent2",
      data: ["parent2child", "parent2child2"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child", "parent1/parent1child2", "parent2/parent2child", "parent2/parent2child2", "parent1/parent1child3", "parent3", "parent4"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child", "parent1child2", "parent1child3"]
    }, {
      title: "parent2",
      data: ["parent2child", "parent2child2"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  it("creates correct data structure", function () {
    var data = ["parent1/parent1child", "parent1/parent1child2", "parent2/parent2child", "parent2/parent2child2", "parent1/parent1child3", "parent3", "parent3/parent3child1", "parent4"];
    var expectedResult = [{
      title: "parent1",
      data: ["parent1child", "parent1child2", "parent1child3"]
    }, {
      title: "parent2",
      data: ["parent2child", "parent2child2"]
    }, {
      title: "parent3",
      data: ["parent3child1"]
    }];
    var actualResult = MenuDataGenerator(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
});