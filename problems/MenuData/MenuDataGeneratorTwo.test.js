const MenuDataGenerator = require("./MenuDataGeneratorTwo");
describe("menu data generator", () => {
    it("creates correct data structure", () => {
        const data = ["parent1/parent1child"];
        const expectedResult = [
            {
                title: "parent1",
                data: ["parent1child"],
            },
        ];
        const actualResult = MenuDataGenerator(data);
        expect(actualResult).toMatchObject(expectedResult);
    });
    it("creates correct data structure", () => {
        const data = [
            "parent1/parent1child",
            "parent1/parent1child2",
            "parent2/parent2child",
        ];
        const expectedResult = [
            {
                title: "parent1",
                data: ["parent1child", "parent1child2"],
            },
            {
                title: "parent2",
                data: ["parent2child"],
            },
        ];
        const actualResult = MenuDataGenerator(data);
        expect(actualResult).toMatchObject(expectedResult);
    });
    it("creates correct data structure", () => {
        const data = [
            "parent1/parent1child",
            "parent1/parent1child2",
            "parent2/parent2child",
            "parent2/parent2child2",
        ];
        const expectedResult = [
            {
                title: "parent1",
                data: ["parent1child", "parent1child2"],
            },
            {
                title: "parent2",
                data: ["parent2child", "parent2child2"],
            },
        ];
        const actualResult = MenuDataGenerator(data);
        expect(actualResult).toMatchObject(expectedResult);
    });
    it("creates correct data structure", () => {
        const data = [
            "parent1/parent1child",
            "parent1/parent1child2",
            "parent2/parent2child",
            "parent2/parent2child2",
            "parent1/parent1child3",
        ];
        const expectedResult = [
            {
                title: "parent1",
                data: ["parent1child", "parent1child2", "parent1child3"],
            },
            {
                title: "parent2",
                data: ["parent2child", "parent2child2"],
            },
        ];
        const actualResult = MenuDataGenerator(data);
        expect(actualResult).toMatchObject(expectedResult);
    });
    it("creates correct data structure", () => {
        const data = [
            "parent1/parent1child",
            "parent1/parent1child2",
            "parent2/parent2child",
            "parent2/parent2child2",
            "parent1/parent1child3",
            "parent3",
        ];
        const expectedResult = [
            {
                title: "parent1",
                data: ["parent1child", "parent1child2", "parent1child3"],
            },
            {
                title: "parent2",
                data: ["parent2child", "parent2child2"],
            },
        ];
        const actualResult = MenuDataGenerator(data);
        expect(actualResult).toMatchObject(expectedResult);
    });

    it("creates correct data structure", () => {
        const data = [
            "parent1/parent1child",
            "parent1/parent1child2",
            "parent2/parent2child",
            "parent2/parent2child2",
            "parent1/parent1child3",
            "parent3",
            "parent3/parent3child1",
            "parent4",
        ];
        const expectedResult = [
            {
                title: "parent1",
                data: ["parent1child", "parent1child2", "parent1child3"],
            },
            {
                title: "parent2",
                data: ["parent2child", "parent2child2"],
            },
            {
                title: "parent3",
                data: ["parent3child1"],
            },
        ];
        const actualResult = MenuDataGenerator(data);
        expect(actualResult).toMatchObject(expectedResult);
    });
});
