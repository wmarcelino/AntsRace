import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {CardProps} from './types';

export const Container = styled(View)`
  flex: 1;
  padding-top: 60px;
  padding-left: ${({theme}) => theme.sizes.medium}px;
  padding-right: ${({theme}) => theme.sizes.medium}px;
  padding-bottom: ${({theme}) => theme.sizes.medium_x}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled(Text)`
  margin-bottom: ${({theme}) => theme.sizes.medium}px;
  font-size: ${({theme}) => theme.sizes.large}px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text};

  align-self: center;
`;

export const StyledLoader = styled(ActivityIndicator)`
  align-self: center;
`;

export const AntContainer = styled(View)`
  background-color: 'white';
  padding: 10px;
  border-width: 1px;
  margin-bottom: 12px;
  border-radius: ${({theme}) => theme.sizes.medium_x}px;
  border-width: 1px;
`;

export const AntRow = styled(View)`
  flex-direction: row;
  margin-bottom: 4px;
  justify-content: space-between;
`;

export const AntPositionLabel = styled(Text)`
  font-size: ${({theme}) => theme.sizes.small_x}px;
  color: ${({theme}) => theme.colors.text};
`;

export const AntPositionText = styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.sizes.medium_x}px;
  color: ${({theme}) => theme.colors.text};
`;

export const AntNameText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: ${({theme}) => theme.colors.text};
`;

export const Button = styled(TouchableOpacity)`
  margin-top: ${({theme}) => theme.sizes.medium_x}px;
  padding: ${({theme}) => theme.sizes.medium}px;
  border-radius: 20px;
  background-color: 'white';
  border-width: 2px;
  margin-bottom: ${({theme}) => theme.sizes.small}px;
`;

export const ButtonText = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: ${({theme}) => theme.sizes.medium_x}px;
  color: ${({theme}) => theme.colors.text};
`;

export const ProgressContainer = styled(View)`
  flex-direction: row;
`;

export const RaceStatusLabel = styled(Text)`
  font-size: ${({theme}) => theme.sizes.medium_x}px;
  color: ${({theme}) => theme.colors.text};
`;

export const RaceStatus = styled(Text)`
  margin-left: ${({theme}) => theme.sizes.medium}px;
  margin-right: ${({theme}) => theme.sizes.medium}px;
  color: ${({theme}) => theme.colors.text};

  font-size: ${({theme}) => theme.sizes.medium_x}px;
  font-weight: bold;
`;

export const PercentageValue = styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.sizes.medium_x}px;
  color: ${({theme}) => theme.colors.text};
`;

export const AsciiContainer = styled(View)``;

export const AsciiText = styled(Text)<CardProps>`
  font-weight: 600;

  color: ${({antColor}) => antColor};
`;
