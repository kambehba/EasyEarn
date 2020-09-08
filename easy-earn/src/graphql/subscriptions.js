/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
