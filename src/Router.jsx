import { createBrowserRouter, redirect} from "react-router-dom";

import Root from "./pages/Root/Root";
import ErrorPage from "./pages/Error/ErrorPage";
import Events from "./components/Events/Events";
import Blog from "./components/Blog/Blog";
import { getEvents as getEventsFromApi } from './utils/api';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "eventos/:page",
                element: <Events />,
                loader: async ({ params }) => {
                    const page = params.page
                    if(isNaN(parseInt(page))){
                        return redirect("/");
                    }
                    const data = await getEventsFromApi(page);
                    console.log(data);
                    const items = data?.items ? data.items : [];
                    return items;
                }
            }
        ]
    }
])

export default router;