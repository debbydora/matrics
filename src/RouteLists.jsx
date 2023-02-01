import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddDriver from "./pages/AddDriver/AddDriver";
import Staff from "./pages/Staff/Staff";
import Protected from "./ProtectedRoute.jsx";
import Company from "./pages/Company/Company";

const RouteLists = [
  {
    path: "/",
    element: <Dashboard />,
    // element: <Protected children={<Dashboard />} />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "addDriver",
    element: <AddDriver />,
  },
  {
    path: "company",
    element: <Company />,
  },
  {
    path: "staff",
    element: <Staff />,
  },
];
export default RouteLists;
