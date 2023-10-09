import {SafeAreaProvider as SafeArea} from 'react-native-safe-area-context';

import Navigation from '@src/navigation';

const App = () => (
  <SafeArea>
    <Navigation />
  </SafeArea>
);

export default App;
