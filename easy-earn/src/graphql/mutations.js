/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      startedBy
      players {
        items {
          id
          title
          gameID
          pn1
          pn2
          pn3
          createdAt
          updatedAt
        }
        nextToken
      }
      wn1
      wn2
      wn3
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      startedBy
      players {
        items {
          id
          title
          gameID
          pn1
          pn2
          pn3
          createdAt
          updatedAt
        }
        nextToken
      }
      wn1
      wn2
      wn3
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      startedBy
      players {
        items {
          id
          title
          gameID
          pn1
          pn2
          pn3
          createdAt
          updatedAt
        }
        nextToken
      }
      wn1
      wn2
      wn3
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      title
      gameID
      game {
        id
        startedBy
        players {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
      pn1
      pn2
      pn3
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      title
      gameID
      game {
        id
        startedBy
        players {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
      pn1
      pn2
      pn3
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      title
      gameID
      game {
        id
        startedBy
        players {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
      pn1
      pn2
      pn3
      createdAt
      updatedAt
    }
  }
`;
