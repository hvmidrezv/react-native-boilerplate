import {spacingUnit} from './configs';

export const spacing = (ratio: number) => spacingUnit * ratio;
export const spacingPX = (ratio: number) => `${spacing(ratio)}px`;
