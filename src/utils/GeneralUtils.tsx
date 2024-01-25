import CollectionInterface from "./interfaces/CollectionInterface";
import {nftPlaceholder, userPlaceholder} from "../assets";
import CreatorInterface from "./interfaces/CreatorInterface";

export const discoverSectionDescription = "NFT marketplace UI created with Anima for Figma." +
    " Collect, buy and sell art from more than 20k NFT artists."

export const signUpDescription = "Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs."

export const TOP_CREATORS: CreatorInterface[] = [
    {
        id: 1,
        userName: 'Keepitreal',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 2,
        userName: 'DigiLab',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 3,
        userName: 'GrasvityOne',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 4,
        userName: 'Juanie',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 5,
        userName: 'BlueWhale',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 6,
        userName: 'Mr Fox',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 7,
        userName: 'Shroomie',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 8,
        userName: 'Robotica',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 9,
        userName: 'RustyRobot',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 10,
        userName: 'Animakid',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 11,
        userName: 'Dotgu',
        userImage: userPlaceholder,
        sales: 34.53
    },
    {
        id: 12,
        userName: 'Ghiblier',
        userImage: userPlaceholder,
        sales: 34.53
    }
]

export const TRENDING_COLLECTIONS: CollectionInterface[] = [
    {
        id: 1,
        collectionName: 'DSGN Animals',
        userImage: userPlaceholder,
        userName: 'MrFox',
        collectionImages: [
            nftPlaceholder,
            nftPlaceholder,
            nftPlaceholder,
        ]
    },
    {
        id: 2,
        collectionName: 'Magic Mushrooms',
        userImage: userPlaceholder,
        userName: 'Shroomie',
        collectionImages: [
            nftPlaceholder,
            nftPlaceholder,
            nftPlaceholder,
        ]
    },
    {
        id: 3,
        collectionName: 'Disco Machines',
        userImage: userPlaceholder,
        userName: 'BeKind2Robots',
        collectionImages: [
            nftPlaceholder,
            nftPlaceholder,
            nftPlaceholder,
        ]
    }
]