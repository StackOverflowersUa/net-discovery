import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuestInfoPage from "./pages/QuestInfoPage";

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
    ]);

  return <RouterProvider router={router} />;
}

export default Router;
