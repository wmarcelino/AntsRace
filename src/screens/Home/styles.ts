import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  padding-top: 100px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 20px;
  background-color: 'white';
`;

export const Button = styled(TouchableOpacity)`
  margin-top: 20px;
  padding: 20px;
  border-radius: 40px;
  background-color: 'white';
  border-width: 2px;
`;

export const Title = styled(Text)`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  align-self: center;
`;

export const StyledLoader = styled(ActivityIndicator)`
  align-self: center;
`;

export const AntContainer = styled(View)`
  background-color: 'white';
  padding: 10px;
  border-width: 1px;
  margin-bottom: 5px;
`;

export const AntRow = styled(View)`
  flex-direction: row;
  margin-bottom: 4px;
  justify-content: space-between;
`;
