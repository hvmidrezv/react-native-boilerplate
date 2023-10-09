import {useCallback} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {css} from '@emotion/native';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './RootNavigation';
import type {RootStackParamList} from './RootStack';
import RootStack from './RootStack';

const Navigation = () => {
  const handleReady = useCallback(async () => {}, []);

  return (
    <GestureHandlerRootView style={baseStyle}>
      <NavigationContainer<RootStackParamList>
        ref={navigationRef}
        onReady={handleReady}>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigation;

const baseStyle = css({flex: 1});
