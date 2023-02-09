import React, {useCallback, useEffect, useState} from 'react';
import {generateAntWinLikelihoodCalculator} from '../../functions/generateAntWinLikelihoodCalculator';
import {useGetAntsLazyQuery} from '../../integration/Apollo/types/ants';
import {TAnt} from './types';
import {View} from './View';

const compareAnts = (antA: TAnt, antB: TAnt) => {
  if (Number(antA.odd) > Number(antB.odd)) {
    return 1;
  }
  if (Number(antB.odd) > Number(antA.odd)) {
    return -1;
  }
  return 0;
};

export const ViewModel = () => {
  const [getAnts, {data, called, loading}] = useGetAntsLazyQuery();
  const [antsFormatted, setAntsFormatted] = useState<TAnt[]>([]);
  const [calculators, setCalculators] = useState<any>([]);

  const handleGetAnts = useCallback(() => {
    setCalculators([]);
    setAntsFormatted([]);
    getAnts({
      fetchPolicy: 'no-cache',
    });
  }, [getAnts]);

  const handleStartRace = useCallback(() => {
    Promise.all(calculators)
      .then(results => {
        const localAnts: TAnt[] = antsFormatted.map(ant => {
          const antOdd = results.find(item => item.ant.name === ant.name);

          return {
            ...ant,
            odd: antOdd.likehookd,
          };
        });

        const antsSorted = localAnts.sort(compareAnts);

        setAntsFormatted(antsSorted);
      })
      .catch(error => {
        console.error(error);
      });
  }, [antsFormatted, calculators]);

  // If there is any change in the contract by the Backend, here is FOR NOW a good place to deal with it,
  // so there is no reason to change the view contract.
  useEffect(() => {
    if (data) {
      const localAntsFormatted: TAnt[] =
        data?.ants?.map(item => {
          const calculator = generateAntWinLikelihoodCalculator();

          calculators.push(
            new Promise(resolve => {
              calculator(likehookd => {
                resolve({ant: item, likehookd});
              });
            }),
          );

          return {
            name: item?.name || '',
            length: item?.length || 0,
            color: item?.color || '',
            weight: item?.weight || 0,
          };
        }) || [];
      setAntsFormatted(localAntsFormatted);
    }
  }, [calculators, data]);

  return (
    <View
      loading={loading && called}
      data={antsFormatted}
      handleGetAnts={handleGetAnts}
      handleStartRace={handleStartRace}
    />
  );
};
