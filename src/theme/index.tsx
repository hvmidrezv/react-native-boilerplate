import {ThemeProvider as Styled} from '@emotion/react';
import type {ReactNode} from 'react';
import {Provider as Paper} from 'react-native-paper';

import {Palette} from './theme';

type Props = {
  children: ReactNode;
};

const Theme = ({children}: Props) => (
  <Styled theme={Palette}>
    <Paper theme={Palette}>{children}</Paper>
  </Styled>
);

export default Theme;
