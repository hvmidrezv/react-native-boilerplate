import {Text} from 'react-native-paper';
import styled from '@emotion/native';

const Home = () => <WelcomeText>Welcome to ProjectName</WelcomeText>;

export default Home;

const WelcomeText = styled(Text)(props => ({
  color: props.theme.colors.primary,
}));
