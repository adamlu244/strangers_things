import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import NotFound from "./NotFound";
import Root from "./routes/Root";
import Posts from "./routes/Posts";
import Profile from "./routes/Profile";
import Register from "./routes/Register";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

