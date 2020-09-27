/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      createdBy
      players {
        items {
          id
          name
          pn1
          pn2
          pn3
          createdAt
          updatedAt
        }
        nextToken
      }
      winners {
        items {
          id
          name
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
      createdBy
      players {
        items {
          id
          name
          pn1
          pn2
          pn3
          createdAt
          updatedAt
        }
        nextToken
      }
      winners {
        items {
          id
          name
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
      createdBy
      players {
        items {
          id
          name
          pn1
          pn2
          pn3
          createdAt
          updatedAt
        }
        nextToken
      }
      winners {
        items {
          id
          name
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
      name
      pn1
      pn2
      pn3
      game {
        id
        createdBy
        players {
          nextToken
        }
        winners {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
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
      name
      pn1
      pn2
      pn3
      game {
        id
        createdBy
        players {
          nextToken
        }
        winners {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
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
      name
      pn1
      pn2
      pn3
      game {
        id
        createdBy
        players {
          nextToken
        }
        winners {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWinner = /* GraphQL */ `
  mutation CreateWinner(
    $input: CreateWinnerInput!
    $condition: ModelWinnerConditionInput
  ) {
    createWinner(input: $input, condition: $condition) {
      id
      name
      game {
        id
        createdBy
        players {
          nextToken
        }
        winners {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWinner = /* GraphQL */ `
  mutation UpdateWinner(
    $input: UpdateWinnerInput!
    $condition: ModelWinnerConditionInput
  ) {
    updateWinner(input: $input, condition: $condition) {
      id
      name
      game {
        id
        createdBy
        players {
          nextToken
        }
        winners {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWinner = /* GraphQL */ `
  mutation DeleteWinner(
    $input: DeleteWinnerInput!
    $condition: ModelWinnerConditionInput
  ) {
    deleteWinner(input: $input, condition: $condition) {
      id
      name
      game {
        id
        createdBy
        players {
          nextToken
        }
        winners {
          nextToken
        }
        wn1
        wn2
        wn3
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
