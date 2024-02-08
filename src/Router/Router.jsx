import { createBrowserRouter } from "react-router-dom";
import Dashboard from './../layout/Dashboard';
import DashboardStatistics from './../layout/pages/DashboardStatistics';
import DashboardAddTask from "../layout/pages/DashboardAddTask";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element:<DashboardStatistics></DashboardStatistics>,
      },
      {
        path:"addTask",
        element:<DashboardAddTask></DashboardAddTask>
      }
    ],
  },
]);

export default router;
