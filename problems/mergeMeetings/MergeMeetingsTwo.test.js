const MergeMeetings = require("./MergeMeetingsTwo");
describe('Merge meetings', () => {
    it('should return startTime 1 and endTime 4', () => {
        const result = MergeMeetings([{
                startTime: 1,
                endTime: 3
            },
            {
                startTime: 2,
                endTime: 4
            },
        ])
        expect(result).toEqual([{
            startTime: 1,
            endTime: 4
        }])
    });
    it('should return startTime 1 and endTime 7', () => {
        const result = MergeMeetings([{
                startTime: 1,
                endTime: 7
            },
            {
                startTime: 2,
                endTime: 4
            },
        ])
        expect(result).toEqual([{
            startTime: 1,
            endTime: 7
        }])
    });
    it('should return 2 meeting objects', () => {
        const result = MergeMeetings([{
                startTime: 1,
                endTime: 4
            },
            {
                startTime: 5,
                endTime: 8
            },
        ])
        expect(result).toEqual([{
                startTime: 1,
                endTime: 4
            },
            {
                startTime: 5,
                endTime: 8
            },
        ])
    });
    it('should return startTime 1 and endTime 8', () => {
        const result = MergeMeetings([{
                startTime: 1,
                endTime: 5
            },
            {
                startTime: 5,
                endTime: 8
            },
        ])
        expect(result).toEqual([{
            startTime: 1,
            endTime: 8
        }])
    });
    it('should return 2 meeting objects', () => {
        const result = MergeMeetings([{
                startTime: 1,
                endTime: 5
            },
            {
                startTime: 4,
                endTime: 9
            },
            {
                startTime: 12,
                endTime: 19
            },
        ])
        expect(result).toEqual([{
                startTime: 1,
                endTime: 9
            },
            {
                startTime: 12,
                endTime: 19
            }
        ])
    });

});