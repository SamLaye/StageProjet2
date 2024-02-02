import {
    ACCEUIL_PATH,
    BADGES_PATH,
    BUTTON_GROUPS_PATH, BUTTON_PATH,
    CARDS_PATH,
    CHARTS_PATH,
    FORMS_PATH,
    DROPDOWNS_PATH,
    INPUT_GROUPS_PATH,
    WIDGETS_PATH
} from "./navigationPaths";
import { HiHome, HiMenu } from "react-icons/hi";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: HiHome, label: "Dashbord" },
    { path: CARDS_PATH, icon: HiMenu, label: "CARDS" },
    { path: CHARTS_PATH, icon: HiHome, label: "CHARTS" },
    { path: WIDGETS_PATH, icon: HiHome, label: "WIDGETS" },
    // // { path: UUUUUUU_PATH, icon: HiHome, label: "Components" },
    { path: BUTTON_PATH, icon: HiHome, label: "BUTTON" },
    { path: BUTTON_GROUPS_PATH, icon: HiHome, label: "BUTTON GROUPS" },
    { path: FORMS_PATH, icon: HiHome, label: "FORMS" },
    { path: INPUT_GROUPS_PATH, icon: HiHome, label: "INPUT GROUPS" },
    { path: DROPDOWNS_PATH, icon: HiHome, label: "DROPDOMNS" },
    { path: BADGES_PATH, icon: HiHome, label: "BADGES" },
]
