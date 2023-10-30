import {SafeAreaProvider as SafeArea} from 'react-native-safe-area-context';

import Navigation from '@src/navigation';
import Theme from '@src/theme';

const App = () => (
  <SafeArea>
    <Theme>
      <Navigation />
    </Theme>
  </SafeArea>
);

export default App;
