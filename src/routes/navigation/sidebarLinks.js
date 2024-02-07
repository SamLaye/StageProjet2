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
import { MdDashboard, MdWidgets, MdArrowDropDownCircle } from "react-icons/md";
import { RiLayout6Fill, RiRadioButtonLine } from "react-icons/ri";
import { IoIosStats, IoMdStar } from "react-icons/io";
import { LuCircleDotDashed } from "react-icons/lu";
import { SiFormstack } from "react-icons/si";
import { FaListUl } from "react-icons/fa6";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: ACCEUIL_PATH, icon: MdDashboard, label: "Dashbord" },
    { path: CARDS_PATH, icon: RiLayout6Fill, label: "CARDS" },
    { path: CHARTS_PATH, icon: IoIosStats, label: "CHARTS" },
    { path: WIDGETS_PATH, icon: MdWidgets, label: "WIDGETS" },
    { path: BUTTON_PATH, icon: RiRadioButtonLine, label: "BUTTON" },
    { path: BUTTON_GROUPS_PATH, icon: LuCircleDotDashed, label: "BUTTON GROUPS" },
    { path: FORMS_PATH, icon: SiFormstack, label: "FORMS" },
    { path: INPUT_GROUPS_PATH, icon: FaListUl, label: "INPUT GROUPS" },
    { path: DROPDOWNS_PATH, icon: MdArrowDropDownCircle, label: "DROPDOMNS" },
    { path: BADGES_PATH, icon: IoMdStar, label: "BADGES" },
]
