import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ant = {
  __typename?: 'Ant';
  /** The color of the ant */
  color: AntColor;
  /** The length of the ant in millimetres */
  length: Scalars['Int'];
  /** The name of the ant */
  name: Scalars['String'];
  /** The weigt of the ant in milligrams */
  weight: Scalars['Int'];
};

export enum AntColor {
  Black = 'BLACK',
  Red = 'RED',
  Silver = 'SILVER'
}

export type Query = {
  __typename?: 'Query';
  /** A list of competing ants */
  ants: Array<Maybe<Ant>>;
};

export type GetAntsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAntsQuery = { __typename?: 'Query', ants: Array<{ __typename?: 'Ant', name: string, length: number, color: AntColor, weight: number } | null> };


export const GetAntsDocument = gql`
    query GetAnts {
  ants {
    name
    length
    color
    weight
  }
}
    `;

/**
 * __useGetAntsQuery__
 *
 * To run a query within a React component, call `useGetAntsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAntsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAntsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAntsQuery(baseOptions?: Apollo.QueryHookOptions<GetAntsQuery, GetAntsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAntsQuery, GetAntsQueryVariables>(GetAntsDocument, options);
      }
export function useGetAntsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAntsQuery, GetAntsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAntsQuery, GetAntsQueryVariables>(GetAntsDocument, options);
        }
export type GetAntsQueryHookResult = ReturnType<typeof useGetAntsQuery>;
export type GetAntsLazyQueryHookResult = ReturnType<typeof useGetAntsLazyQuery>;
export type GetAntsQueryResult = Apollo.QueryResult<GetAntsQuery, GetAntsQueryVariables>;