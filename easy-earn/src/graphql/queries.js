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
      gameID
      game {
        id
        createdBy
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
        gameID
        game {
          id
          createdBy
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
      nextToken
    }
  }
`;
