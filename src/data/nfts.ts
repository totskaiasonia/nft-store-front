import nft1 from '../assets/nft-image-1.jpg';
import nft2 from '../assets/nft-image-2.jpeg';
import nft3 from '../assets/nft-image-3.webp';
import nft4 from '../assets/nft-image-4.png';
import nft5 from '../assets/nft-image-5.webp';
import nft6 from '../assets/nft-image-6.jpeg';
import nft7 from '../assets/nft-image-7.jpeg';
import nft8 from '../assets/nft-image-8.jpg';
import nft9 from '../assets/nft-image-9.avif';

const nfts = [
    {
        name: "Flasking fluid outsider",
        author: "Gilad Gray",
        image: nft1,
        price: 0.5,
        timeLeft: {
            h: 23,
            m: 12,
            s: 31
        },
        amountLeft: 2,
        totalAmount: 10,
        collection: "fluids",
        categories: ['modern', 'art']
    },
    {
        name: "Birthday ape",
        author: "Tom Smith",
        image: nft2,
        price: 4.53,
        timeLeft: {
            h: 3,
            m: 2,
            s: 15
        },
        amountLeft: 1,
        totalAmount: 5,
        collection: "Crypto Creatures",
        categories: ['modern', 'art']
    },
    {
        name: "Evil dark ape",
        author: "Tom Smith",
        image: nft3,
        price: 0.03,
        timeLeft: {
            h: 14,
            m: 6,
            s: 7
        },
        amountLeft: 12,
        totalAmount: 15,
        collection: "Crypto Creatures",
        categories: ['modern', 'gaming']
    },
    {
        name: "Gaming T-rex",
        author: "Sam Whiten",
        image: nft4,
        price: 0.17,
        timeLeft: {
            h: 21,
            m: 43,
            s: 59
        },
        amountLeft: 5,
        totalAmount: 25,
        collection: "Metaverse Masters",
        categories: ['pixel', 'gaming']
    },
    {
        name: "Rich boy not whale",
        author: "Sam Whiten",
        image: nft5,
        price: 0.02,
        timeLeft: {
            h: 23,
            m: 43,
            s: 12
        },
        amountLeft: 21,
        totalAmount: 25,
        collection: "Metaverse Masters",
        categories: ['pixel', 'gaming']
    },
    {
        name: "Gaming girl",
        author: "Sam Whiten",
        image: nft6,
        price: 0.004,
        timeLeft: {
            h: 13,
            m: 54,
            s: 1
        },
        amountLeft: 2,
        totalAmount: 10,
        collection: "Virtual Neon",
        categories: ['gaming', '3D']
    },
    {
        name: "Digital cyber guy",
        author: "Sam Whiten",
        image: nft7,
        price: 0.004,
        timeLeft: {
            h: 16,
            m: 51,
            s: 15
        },
        amountLeft: 4,
        totalAmount: 10,
        collection: "Virtual Neon",
        categories: ['gaming', '3D']
    },
    {
        name: "Pink lord",
        author: "Gilad Gray",
        image: nft8,
        price: 2.82,
        timeLeft: {
            h: 0,
            m: 21,
            s: 42
        },
        amountLeft: 1,
        totalAmount: 100,
        collection: "Cyber Artifacts",
        categories: ['art', 'modern', '3D']
    },
    {
        name: "Neon ape",
        author: "Tom Smith",
        image: nft9,
        price: 21.45,
        timeLeft: {
            h: 16,
            m: 24,
            s: 52
        },
        amountLeft: 1,
        totalAmount: 5,
        collection: "Crypto Creatures",
        categories: ['neon', 'art']
    },
];

export default nfts;