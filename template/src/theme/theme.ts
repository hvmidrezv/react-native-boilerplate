import {adaptNavigationTheme, MD3LightTheme} from 'react-native-paper';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';

import {spacingUnit} from './configs';
import type {Theme} from './types';
import {spacing} from './units';

export const Palette: Theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 1.5,
  isV3: true,
  mode: 'adaptive',
  spacingUnit,
  spacing,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#936ee3',
    primaryContainer: '#fff',
    onPrimary: '#ffffff',
    secondary: '#fff',
    onSurface: '#fff',
    onBackground: '#fff',
    tertiary: '#fff',
    onSurfaceDisabled: '#fff',
    surfaceDisabled: '#fff',
    background: '#fff',
    surface: '#fff',
    outline: '#fff',
    outlineVariant: '#fff',
    warn: '#fff',
  },
};

export const {LightTheme: navigationLightTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  materialLight: Palette,
});
