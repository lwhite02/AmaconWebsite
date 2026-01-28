import { Menu } from "@/types/menu";
import PowerAndEnergyIndex from "@/app/services/powerAndEnergy/page"
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 4,
        title: "Power and Energy",
        path: "/services/powerAndEnergy",
        newTab: false,
      },
      {
        id:5,
        title: "Infrastructure",
        path: "/services/infrastructure",
        newTab: false,
      },
      {
        id: 6,
        title: "Engineering, Design and Drawing Office",
        path: "/services/drawing",
        newTab: false,
       
      },
      {
        id: 7,
        title: "Factory Acceptance Testing & Quality Assurance",
        path: "/services/qualityandfactory",
        newTab: false,
      },
      
      {
        id: 8,
        title: "Construction Management and Commissioning",
        path: "/services/construction",
        newTab: false,
      },
      {
        id: 9,
        title: "Asset Manament Service Division" ,
        path: "/services/assetmanagement",
        newTab: false,
      },
      
    ],
  },
  {
    id: 10,
    title: "Our Experience",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Mineral Processing",
        path: "/experience/general",
        newTab: false,
      },
      {
        id: 12,
        title: "International",
        path: "/experience/international",
        newTab: false,
      },
     
    ],
  },
  {
    id: 13,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },

];
export default menuData;
