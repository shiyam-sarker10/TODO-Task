import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdAddToPhotos, MdDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" fixed top-0 z-20 flex h-20 w-full items-center bg-white px-4 shadow-md">
        <FiMenu onClick={() => setIsOpen(true)} className="text-[30px]" />
      </div>
      <div className="flex h-full">
        {/* dashboard- sidebar  */}

        <div
          onClick={() => setIsOpen(false)}
          className={`fixed top-0 z-20 h-full w-full bg-black/20 lg:hidden ${isOpen ? "" : " hidden"}`}
        ></div>

        <div
          className={`fixed top-0 z-30 h-screen w-[300px] border bg-white  duration-300 lg:sticky  ${isOpen ? "left-0" : "-left-[500px]"}`}
        >
          <h1 className="pb-10 pt-20 text-center text-3xl font-semibold">
            Dashboard
          </h1>
          {/* navList container  */}
          <div className="flex flex-col">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "flex items-center gap-6 px-6  py-4 text-[22px] duration-500 active:bg-black/10"
                    : "flex items-center gap-6 px-6 py-4 text-[22px] duration-500 active:bg-black/10"
              }
            >
              <MdDashboard className="text-[30px]" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/addTask"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "flex items-center gap-6 px-6  py-4 text-[22px] duration-500 active:bg-black/10"
                    : "flex items-center gap-6 px-6 py-4 text-[22px] duration-500 active:bg-black/10"
              }
            >
              <MdAddToPhotos className="text-[30px]" />
              <span>Add Task</span>
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/allTask"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "flex items-center gap-6 px-6  py-4 text-[22px] duration-500 active:bg-black/10"
                    : "flex items-center gap-6 px-6 py-4 text-[22px] duration-500 active:bg-black/10"
              }
            >
              <FaTasks className="text-[30px]" />
              <span>All Task</span>
            </NavLink>
          </div>
        </div>

        {/* content side - outlet  */}
        <div
          className={` z-10 w-full px-8 pb-10 pt-24 lg:w-[calc(100vw-300px)]`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
