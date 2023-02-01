import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLists from "./RouteLists";
const router = createBrowserRouter(RouteLists);

function App() {
  return (
    <div className="Apps">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
