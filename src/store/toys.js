import { combineReducers } from "redux";

const collections = [
  {
    id: 1,
    name: "The Simpsons",
    path: "Homer1.jpg",
    masterAssetId: 13,
    tags: {
      name: "Cartoon",
      subTag: {
        name: "Simpsons family",
        subTag: {
          name: "2014",
        },
      },
    },
  },
  {
    id: 2,
    name: "Super heroes",
    path: "Superman1.jpg",
    masterAssetId: 24,
    tags: {
      name: "DC Super heroes",
      subTag: {
        name: "2014",
      },
    },
  },
  {
    id: 3,
    name: "Toy story",
    path: "Toy.jpg",
    masterAssetId: 31,
    tags: {
      name: "Disney",
      subTag: {
        name: "Pixar",
        subTag: {
          name: "Original movie",
          subTag: {
            name: "2010",
          },
        },
      },
    },
  },
  {
    id: 4,
    name: "Ninjago",
    path: "Ninjago.jpg",
    masterAssetId: 42,
    tags: {
      name: "Ninja",
      subTag: {
        name: "Secret Ninja Force",
        subTag: {
          name: "2017",
        },
      },
    },
  },
];

const assets = [
  {
    id: 11,
    name: "Homer Simpson",
    path: "Homer.jpg",
    collectionId: 1,
  },
  {
    id: 12,
    name: "Lisa Simpson",
    path: "Lisa.jpg",
    collectionId: 1,
  },
  {
    id: 13,
    name: "Bart Simpson",
    path: "Bart.jpg",
    collectionId: 1,
  },
  {
    id: 14,
    name: "Marge Simpson",
    path: "Marge.jpg",
    collectionId: 1,
  },
  {
    id: 15,
    name: "Grampa Simpson",
    path: "Grampa.jpg",
    collectionId: 1,
  },
  {
    id: 16,
    name: "Maggie Simpson",
    path: "Maggie.jpg",
    collectionId: 1,
  },
  {
    id: 21,
    name: "Green Lantern",
    path: "Green lantern.jpg",
    collectionId: 2,
  },
  {
    id: 22,
    name: "Flash",
    path: "Flash.jpg",
    collectionId: 2,
  },
  {
    id: 23,
    name: "Batman",
    path: "Batman.jpg",
    collectionId: 2,
  },
  {
    id: 24,
    name: "Superman",
    path: "Superman.jpg",
    collectionId: 2,
  },
  {
    id: 31,
    name: "Buzz Lightyear",
    path: "Buzz.jpg",
    collectionId: 3,
  },
  {
    id: 32,
    name: "Alien",
    path: "Alien.jpg",
    collectionId: 3,
  },
  {
    id: 41,
    name: "Spinjitzu training Nya",
    path: "Nya.jpg",
    collectionId: 4,
  },
  {
    id: 42,
    name: "Master Wu",
    path: "Wu.jpg",
    collectionId: 4,
  },
  {
    id: 43,
    name: "Lloyd",
    path: "Lloyd.jpg",
    collectionId: 4,
  },
];

const masterAssests = [];

export function makeAssetMaster(data) {
  return {
    type: "MAKE_MASTER",
    data,
  };
}

function toys(state = [collections, assets, masterAssests], action) {
  switch (action.type) {
    case "MAKE_MASTER":
      const existingMasterAssestsIndex = masterAssests.findIndex(
        (masterAssest) => masterAssest.collectionId === action.data.collectionId
      );

      if (existingMasterAssestsIndex === -1) {
        masterAssests.push({
          collectionId: action.data.collectionId,
          asset: action.data.asset,
        });
      } else {
        masterAssests[existingMasterAssestsIndex].asset = action.data.asset;
      }
      return state;

    default:
      return state;
  }
}

const toysApp = combineReducers({
  toys,
});

export default toysApp;
