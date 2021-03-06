/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pn1
        pn2
        pn3
        game {
          id
          createdBy
          wn1
          wn2
          wn3
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWinner = /* GraphQL */ `
  query GetWinner($id: ID!) {
    getWinner(id: $id) {
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
export const listWinners = /* GraphQL */ `
  query ListWinners(
    $filter: ModelWinnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWinners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        game {
          id
          createdBy
          wn1
          wn2
          wn3
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
