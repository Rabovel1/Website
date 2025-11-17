import { Menu } from "@/types/menu";

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
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      // {
      //   id: 5,
      //   title: "Education",
      //   path: "/",
      //   newTab: false,
      // },
      {
        id: 7,
        title: "FAQ",
        path: "/faq",
        newTab: false,
      },
      {
        id: 8,
        title: "Policies",
        path: "/policy",
        newTab: false,
      },
    ],
  },
];
export default menuData;
