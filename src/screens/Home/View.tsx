//  \(")/
//  -( )-
//  /(_)\
import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import {
  AntContainer,
  AntNameText,
  AntPositionText,
  AntRow,
  Button,
  Container,
  ProgressContainer,
  RaceStatus,
  RaceStatusLabel,
  ButtonText,
  StyledLoader,
  Title,
  AsciiContainer,
  AsciiText,
  PercentageValue,
} from './styles';
import {TAnt, ViewProps} from './types';
import {GetRaceStatus} from './ViewModel';
export const View = ({
  data,
  loading,
  error,
  raceStatus,
  raceStatusFormatted,
  handleStartRace,
  handleGetAnts,
}: ViewProps) => {
  const RenderItem = useCallback((index: number, item: TAnt) => {
    return (
      <AntContainer>
        <AntRow>
          <AntPositionText># {index + 1}</AntPositionText>
          <AsciiContainer>
            <AsciiText antColor={item.color.toLowerCase()}>\(")/</AsciiText>
            <AsciiText antColor={item.color.toLowerCase()}>-( )-</AsciiText>
            <AsciiText antColor={item.color.toLowerCase()}>/(_)\</AsciiText>
          </AsciiContainer>
        </AntRow>
        <AntNameText>{item.name}</AntNameText>

        <AntRow>
          <Text>Status</Text>
          <Text>{GetRaceStatus[item.oddStatus]}</Text>
          {item.oddStatus === 'in_progress' && <ActivityIndicator />}
        </AntRow>

        <AntRow>
          <Text>Likelihood Calculation</Text>
          <PercentageValue>{item.oddFormatted}</PercentageValue>
        </AntRow>
      </AntContainer>
    );
  }, []);

  const Footer = useCallback(() => {
    return (
      <>
        <Button onPress={handleGetAnts}>
          <ButtonText>
            {data?.length > 0 ? 'Recapture the ant!' : 'Capture the ant!'}
          </ButtonText>
        </Button>
      </>
    );
  }, [data?.length, handleGetAnts]);

  if (error) {
    return <Text>{error}</Text>;
  }

  if (loading) {
    return (
      <Container>
        <StyledLoader size={'large'} />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Ant race!</Title>
      {data.length > 0 && raceStatus === 'not_yet' && (
        <Button disabled={data.length === 0} onPress={handleStartRace}>
          <ButtonText>Start the race!</ButtonText>
        </Button>
      )}
      <ProgressContainer>
        {data?.length > 0 && (
          <>
            <RaceStatusLabel>Race Status:</RaceStatusLabel>
            <RaceStatus>{raceStatusFormatted}</RaceStatus>
          </>
        )}
        {raceStatus === 'in_progress' && <ActivityIndicator />}
      </ProgressContainer>

      <FlatList
        ListFooterComponent={Footer}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginTop: 20}}
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingBottom: 20}}
        data={data}
        renderItem={({index, item}) => RenderItem(index, item)}
      />
    </Container>
  );
};
