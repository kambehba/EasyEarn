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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateWinner = /* GraphQL */ `
  subscription OnCreateWinner {
    onCreateWinner {
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
export const onUpdateWinner = /* GraphQL */ `
  subscription OnUpdateWinner {
    onUpdateWinner {
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
export const onDeleteWinner = /* GraphQL */ `
  subscription OnDeleteWinner {
    onDeleteWinner {
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
