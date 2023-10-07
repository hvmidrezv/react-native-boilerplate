/**
 * @format
 */

// Note: test renderer must be required after react-native.
import 'react-native';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

import App from '../src/App';
// eslint-disable-next-line
it('renders correctly', () => {
  renderer.create(<App />);
});
