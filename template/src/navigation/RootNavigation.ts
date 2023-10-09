import {createNavigationContainerRef} from '@react-navigation/native';
import type {PartialState} from '@react-navigation/routers';

import type {RootStackParamList} from './RootStack';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
};

export const reset = (state: PartialState<any>) => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.reset(state);
  }
};
