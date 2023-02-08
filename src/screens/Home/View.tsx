import React, {useCallback} from 'react';
import {FlatList, Text} from 'react-native';
import {
  AntContainer,
  AntRow,
  Button,
  Container,
  StyledLoader,
  Title,
} from './styles';
import {TAnt, ViewProps} from './types';
export const View = ({
  data,
  loading,
  error,
  handleStartRace,
  handleGetAnts,
}: ViewProps) => {
  const RenderItem = useCallback((index: number, item: TAnt) => {
    return (
      <AntContainer>
        <AntRow>
          <Text>Position</Text>
          <Text>{index + 1}</Text>
        </AntRow>
        <AntRow>
          <Text>Name</Text>
          <Text>{item.name}</Text>
        </AntRow>
        <AntRow>
          <Text>Color</Text>
          <Text style={{color: item.color?.toLowerCase() || 'black'}}>
            {item.color}
          </Text>
        </AntRow>

        <AntRow>
          <Text>Odd</Text>
          <Text>{item.odd ? item.odd : 'unknown'}</Text>
        </AntRow>
        <AntRow>
          <Text>Weight</Text>
          <Text>{item.weight}</Text>
        </AntRow>
      </AntContainer>
    );
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Container>
      <Title>Ant race!</Title>

      {loading ? (
        <StyledLoader size={'large'} />
      ) : (
        <>
          <Button onPress={handleGetAnts}>
            <Text>Capture the ant!</Text>
          </Button>

          <Button disabled={data.length === 0} onPress={handleStartRace}>
            <Text>Start the race!</Text>
          </Button>

          <FlatList
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginTop: 20}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}
            data={data}
            renderItem={({index, item}) => RenderItem(index, item)}
          />
        </>
      )}
    </Container>
  );
};
