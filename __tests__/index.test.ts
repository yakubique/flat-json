import * as core from '@actions/core';
import * as helper from '../src/io-helper';

import { describe, expect } from '@jest/globals';


let getInputsMock: jest.SpiedFunction<typeof helper.getInputs>;
let setOutputMock: jest.SpiedFunction<typeof core.setOutput>;

describe('index.ts', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        getInputsMock = jest.spyOn(helper, 'getInputs').mockImplementation();
        setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation();
    });

    it('should concat multiple JSON arrays', () => {
        getInputsMock.mockImplementation(() => {
            return {
                fromFile: false,
                toFile: false,
                input: '[[1,2,3], [5,6]]'
            } as helper.ActionInputs;
        });

        require('../src/index');
        expect(getInputsMock).toBeCalled();
        expect(setOutputMock).toHaveBeenNthCalledWith(1, 'result', [1, 2, 3, 5, 6]);
    });
});
