import { createBrowserRouter } from "react-router-dom";
import Dashboard from './../layout/Dashboard';
import DashboardStatistics from './../layout/pages/DashboardStatistics';
import DashboardAddTask from "../layout/pages/DashboardAddTask";
import DashboardAllTask from "../layout/pages/DashboardAllTask";
import DashboardEdit from "../layout/pages/DashboardEdit";





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
      },
      {
        path:"allTask",
        element:<DashboardAllTask></DashboardAllTask>
      },
      {
        path:"editTask/:id",
        element:<DashboardEdit></DashboardEdit>
      }
    ],
  },
]);

export default router;
