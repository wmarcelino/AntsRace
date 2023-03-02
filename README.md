# AntsRace Project Readme

This document explains how to run the AntsRace project on your local machine. 


## Getting Started

1. Clone the AntsRace project repository to your local machine:

```console
git clone https://github.com/wmarcelino/AntsRace/
```


2. Navigate to the cloned repository:

```console
cd AntsRace
```

3. Install the required dependencies:

```console
yarn install
```


## Running the Project

To run the AntsRace project, execute the following command:

- To run on iOS:

```console
cd ios
```

```console
pod install
```

```console
cd ..
```

```console
yarn ios
```


- To run on Android:
```console
yarn android
```



## Updating Apollo Types
Using Apollo codegen automatically generates strongly typed types for your GraphQL queries, mutations, and subscriptions, which helps prevent typing errors and increases code reliability. The types are already generated but you can update it by using the command:


- To run on iOS:
```console
yarn update-apollo-types
```
