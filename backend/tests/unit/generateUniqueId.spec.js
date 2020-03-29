const generatedUniqueId = require('../../src/utils/generateUniqueId');

describe('Generated Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generatedUniqueId();

        expect(id).toHaveLength(8);
    })
})