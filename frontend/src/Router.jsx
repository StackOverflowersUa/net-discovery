import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuestInfoPage from "./pages/QuestInfoPage";
import ProfileInfoPage from "./pages/ProfileInfoPage";
import PlayQuestPage from "./pages/PlayQuestPage";

function Router(props) {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <StartPage />
            ),
        },
        {
            path: "/quest/:id",
            element: (
                <QuestInfoPage />
            ),
        },
        {
            path: "/profile/:id",
            element: (
                <ProfileInfoPage />
            ),
        },
        {
            path: "/play/:id",
            element: (
                <PlayQuestPage />
            ),
        },
    ]);

  return <RouterProvider router={router} />;
}

export default Router;
