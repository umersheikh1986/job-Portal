import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJobs from "../Pages/CreateJobs";
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/Salary";
import UpdateJob from "../Pages/UpdateJob";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/post-job", element: <CreateJobs /> },
      { path: "/my-job", element: <MyJobs /> },
      { path: "/salary", element: <Salary /> },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
