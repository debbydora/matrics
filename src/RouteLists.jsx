import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddDriver from "./pages/AddDriver/AddDriver";
import Staff from "./pages/Staff/Staff";
import Protected from "./ProtectedRoute.jsx";
import Company from "./pages/Company/Company";

const RouteLists = [
  {
    path: "/",
    // element: <Dashboard />,
    element: <Protected children={<Dashboard />} />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "addDriver",
    // element: <AddDriver />,
    element: <Protected children={<AddDriver />} />,
  },
  {
    path: "company",
    // element: <Company />,
    element: <Protected children={<Company />} />,
  },
  {
    path: "staff",
    // element: <Staff />,
    element: <Protected children={<Staff />} />,
  },
];
export default RouteLists;
