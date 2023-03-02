import React, {useCallback, useEffect, useState} from 'react';
import {generateAntWinLikelihoodCalculator} from '../../functions/generateAntWinLikelihoodCalculator';
import {useGetAntsLazyQuery} from '../../integration/Apollo/types/ants';
import {TAnt, TOddStatus} from './types';
import {View} from './View';

export const GetRaceStatus = {
  not_yet: 'Not yet run',
  in_progress: 'In progress',
  calculated: 'Calculated',
};

const compareAnts = (antA: TAnt, antB: TAnt) => {
  if (Number(antA.odd) > Number(antB.odd)) {
    return -1;
  }
  if (Number(antB.odd) > Number(antA.odd)) {
    return 1;
  }
  return 0;
};

export const ViewModel = () => {
  const [getAnts, {data, called, loading, error}] = useGetAntsLazyQuery();
  const [antsFormatted, setAntsFormatted] = useState<TAnt[]>([]);
  const [globalState, setGlobalState] = useState<TOddStatus>('not_yet');

  const handleGetAnts = useCallback(() => {
    setAntsFormatted([]);
    setGlobalState('not_yet');
    getAnts({
      fetchPolicy: 'no-cache',
    });
  }, [getAnts]);

  const updateAntInList = useCallback(
    (ant: TAnt) => {
      const newAnts = antsFormatted;

      const toBeReplaced = antsFormatted.findIndex(
        item => item.name === ant.name,
      );
      newAnts[toBeReplaced] = ant;

      const sortedList = newAnts.sort(compareAnts);

      if (
        antsFormatted.filter(
          antFiltered => antFiltered.oddStatus === 'in_progress',
        ).length === 0
      ) {
        setGlobalState('calculated');
      }

      setAntsFormatted([...sortedList]);
    },
    [antsFormatted],
  );

  const handleStartRace = useCallback(() => {
    setGlobalState('in_progress');

    const localAnts = antsFormatted;

    localAnts.forEach(ant => {
      ant.oddStatus = 'in_progress';
      updateAntInList(ant);
      const handleCalculation = (odd: number) => {
        ant.odd = odd;
        ant.oddStatus = 'calculated';
        ant.oddFormatted = `${(odd * 100).toFixed(2)}%`;

        updateAntInList(ant);
      };

      generateAntWinLikelihoodCalculator()(handleCalculation);
    });
  }, [antsFormatted, updateAntInList]);

  // If there is any change in the contract by the Backend, here is FOR NOW a good place to deal with it,
  // so there is no reason to change the view contract.
  useEffect(() => {
    if (data) {
      const localAntsFormatted: TAnt[] =
        data?.ants?.map(item => {
          return {
            name: item?.name || '',
            length: item?.length || 0,
            color: item?.color || '',
            weight: item?.weight || 0,
            oddFormatted: 'Unknown',
            oddStatus: 'not_yet',
            odd: 0,
          };
        }) || [];
      setAntsFormatted(localAntsFormatted);
    }
  }, [data]);
  return (
    <View
      loading={loading && called}
      error={error?.message}
      data={antsFormatted}
      raceStatusFormatted={GetRaceStatus[globalState]}
      raceStatus={globalState}
      handleGetAnts={handleGetAnts}
      handleStartRace={handleStartRace}
    />
  );
};
