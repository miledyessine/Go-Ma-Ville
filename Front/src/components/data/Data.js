
import gym from "./../../assets/icons/gym.png"
import historic from "./../../assets/icons/historic-site.png"
import hotel from "./../../assets/icons/hotel.png"
import park from "./../../assets/icons/park.png"
import restaurant from "./../../assets/icons/restaurant.png"

import djerbahood from "./../../assets/images/djerbahood.jpg"
import sidibousaid from "./../../assets/images/sidibousaid.jpg"
import tozeur from "./../../assets/images/tozeur.jpg"


import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import MosqueOutlinedIcon from '@mui/icons-material/MosqueOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';

export const nav = [
    {
        text: "home",
        path: "/",
    },
    {
        text: "services",
        path: "/services/All",
    },
    {
        text: "Packages",
        path: "/services/Package",
    },
    {
        text: "about",
        path: "/About",
    },
]

export const menuItems = [
    {
        text: "All",
        icon: <BorderAllOutlinedIcon></BorderAllOutlinedIcon>,
    },
    {
        text: "CAFE-RESTO",
        icon: <RestaurantOutlinedIcon></RestaurantOutlinedIcon>,
    },
    {
        text: "HOTEL",
        icon: <HotelOutlinedIcon></HotelOutlinedIcon>,
    },
    {
        text: "PARK",
        icon: <AttractionsOutlinedIcon></AttractionsOutlinedIcon>,
    },
    {
        text: "SITE HISTORIQUE",
        icon: <MosqueOutlinedIcon/>,
    },
    {
        text: "GYM",
        icon: <FitnessCenterOutlinedIcon/>,
    },
    {
        text: "BAR",
        icon: <NightlifeOutlinedIcon/>,
    },
    {
        text: "Transport",
        icon: <DepartureBoardOutlinedIcon/>,
    },
    {
        text: "Package",
        icon: <InventoryOutlinedIcon/>,
    },
]

export const featured = [
    {
    cover: hotel,
    name: "HOTEL",
    total: "122 Property",
    },
    {
    cover: restaurant,
    name: "CAFE-RESTO",
    total: "155 Property",
    },
    {
    cover: historic,
    name: "SITE HISTORIQUE",
    total: "80 Site",
    },
    {
    cover: park,
    name: "PARK",
    total: "15 Site",
    },
    {
    cover: gym,
    name: "GYM",
    total: "50 Property",
    },
]

export const location = [
    {
    id: 1,
    name: "Sidi Bou Said, Tunis",
    cover: sidibousaid,
    },
    {
    id: 2,
    name: "StarWars site, Tozeur",
    cover: tozeur,
    },
    {
    id: 3,
    name: "Djerba Hood, Djerba",
    cover: djerbahood,
    },
    
]

export const pack = [
    {
        id:1,
        plan: "Basic",
        price: "29",
        ptext: "per person",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Bus tours",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Air-conditioned vehicle" },
            { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Lunch" },
        ],
        },
        {
        id:2,
        best: "Best Value",
        plan: "Standard",
        price: "49",
        ptext: "per person",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Air-conditioned vehicle",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Personal Help Support",
            },
            {
            change: "color",
            icon: <i class='fa-solid fa-x'></i>,
            text: "Lunch",
            },
        ],
        },
        {
        id:3,
        plan: "Platinum",
        price: "79",
        ptext: "2 people",
        list: [
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Air-conditioned vehicle",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "All fees and taxes",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Free Wifi",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Personal Help Support",
            },
            {
            icon: <i class='fa-solid fa-check'></i>,
            text: "Lunch",
            },
        ],
        },
]

export const footer = [
    {
    title: "LAYOUTS",
    text: [{ list: "Home Page" ,path:"/"}, { list: "Service Page",path:"/services/All" }, { list: "Package Page" ,path:"/services/Package"}],
    },
]

