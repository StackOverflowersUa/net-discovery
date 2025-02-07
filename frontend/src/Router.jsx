import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";

function Router(props) {
    
    const router = createBrowserRouter([
        {
        path: "/",
        element: (
          <StartPage/>
        ),
      }
    ]);

  return <RouterProvider router={router} />;
}

export default Router;
