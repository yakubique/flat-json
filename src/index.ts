import { buildOutput, inputJson, outputJson } from '@yakubique/atils/dist';
import * as core from '@actions/core';
import { ActionInputs, getInputs } from './io-helper';
import concat from 'lodash.concat';

enum Outputs {
    result = 'result',
}

const setOutputs = buildOutput(Outputs);

(async function run() {
    try {
        const inputs: ActionInputs = getInputs();

        const input = inputJson(inputs.input, inputs.fromFile);

        setOutputs({
            result: outputJson(concat([], ...input), inputs.toFile)
        });

        core.info('Success!');
    } catch (err: any) {
        core.setFailed(err.message);
    }
})();
