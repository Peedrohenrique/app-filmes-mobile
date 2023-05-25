import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <StyledView>
      <StyledText>Hello Expo with styled-components!</StyledText>
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: red;
`;