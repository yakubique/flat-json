import * as core from '@actions/core';
import { getBooleanInput } from '@yakubique/atils/dist';

export enum Inputs {
    Input = 'input',
    FromFile = 'from_file',
    ToFile = 'to_file'
}

export interface ActionInputs {
    input: string;
    fromFile: boolean;
    toFile: boolean;
}

export function getInputs(): ActionInputs {
    const result: ActionInputs | any = {};

    result.input = core.getInput(Inputs.Input, { required: true });

    result.fromFile = getBooleanInput(Inputs.FromFile, { required: false });
    result.toFile = getBooleanInput(Inputs.ToFile, { required: false });

    return result;
}
