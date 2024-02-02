/* eslint-disable react/react-in-jsx-scope */
import HomePage from "pages/Home/HomePage";
import {
    ACCEUIL_PATH,
    BADGES_PATH,
    BUTTON_PATH,
    BUTTON_GROUPS_PATH,
    CARDS_PATH,
    CHARTS_PATH,
    DROPDOWNS_PATH,
    FORMS_PATH,
    WIDGETS_PATH,
    INPUT_GROUPS_PATH
} from "../navigationPaths";
import RequireAuth from "layouts/RequireAuth";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { Navigate } from "react-router-dom";
import SplitShell from "layouts/AppShells/SplitShell";

/*
|---------------------------------------------------------------
| Les routes privates
|---------------------------------------------------------------
| Toute page qui necessite une authentification doit etre ici
|
*/
export const privateRoutes = [
    {
        path: ACCEUIL_PATH,
        errorElement: <ErrorBoundary />,
        element: <RequireAuth />,
        children: [
            {
                path: "",
                element: <SplitShell />,
                children: [
                    {
                        path: "*",
                        element: <Navigate to={ACCEUIL_PATH} />
                    },
                    {
                        path: "",
                        element: <HomePage />
                    },
                    {
                        path: CARDS_PATH,
                        element: <p>Hello I AM CARS</p>
                    },
                    {
                        path: CHARTS_PATH,
                        element: <p>Hello I AM CHARTS</p>
                    },
                    {
                        path: WIDGETS_PATH,
                        element: <p>Hello I AM WIDGETS</p>
                    },
                    {
                        path: BUTTON_PATH,
                        element: <p>Hello I AM BUTTON_GROUPS</p>
                    },
                    {
                        path: BUTTON_GROUPS_PATH,
                        element: <p>Hello I AM BUTTON_GROUPS</p>
                    },
                    {
                        path: FORMS_PATH,
                        element: <p>Hello I AM FORMS</p>
                    },
                    {
                        path: INPUT_GROUPS_PATH,
                        element: <p>Hello I AM INPUT GROUPS</p>
                    },
                    // {
                    //     path: CHARTS_PATH,
                    //     element: <p>Hello I AM CHARTS</p>
                    // },
                    {
                        path: DROPDOWNS_PATH,
                        element: <p>Hello I AM DROPDOWNS</p>
                    },
                    {
                        path: BADGES_PATH,
                        element: <p>Hello I AM BADGES</p>
                    },
                ]
            }
        ]
    },
];