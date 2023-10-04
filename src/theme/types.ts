import type {MD3Theme} from 'react-native-paper';

export type Theme = MD3Theme & {
  spacingUnit: number;
  spacing: (ratio: number) => number;
  colors: {warn: string};
};
