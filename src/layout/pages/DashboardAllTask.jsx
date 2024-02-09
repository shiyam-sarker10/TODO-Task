import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { BiSolidTrash } from "react-icons/bi";
import { LuCheckSquare } from "react-icons/lu";
import { toast } from "react-toastify";

const DashboardAllTask = () => {
    const [status,setStatus] = useState("all")
    const [datas,setDatas] = useState([])

    // fetching data 

    useEffect(() => {
     const  Fetching = async() => {
        const response = await axios.get(`http://localhost:5000/tasks?value=${status}`);
     setDatas(response.data)

     }
     Fetching();

    }, [status]);

    // handle complete function - updating status to complete 

    const handleComplete = (id) => {
        axios
          .patch(`http://localhost:5000/updateTask?id=${id}`,{Status:"complete"} )
          .then(() => {
            toast.success("Successfully Completed!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            window.location.reload();
          })
          .catch(() => {});
    }
    // handle delete function - deleting specific data 

    const handleDelete = (id) => {
        axios
          .delete(`http://localhost:5000/deleteTask?id=${id}`)
          .then(() => {
            toast.success("Successfully Deleted!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            window.location.reload();
          })
          .catch(() => {});
          
    }




  return (
    <div className="relative  overflow-x-auto sm:rounded-lg">
      <div className="flex-column flex flex-wrap items-center justify-between space-y-4 pb-4 sm:flex-row sm:space-y-0">
        {/* selector - status  */}
        <div className="mx-4">
          <select
            className="rounded-lg border-[2px] border-gray-500/30 px-6 py-[6px] text-sm font-medium text-[#6B7280]"
            name=""
            id=""
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all" selected>
              Filter
            </option>
            <option value="complete">complete</option>
            <option value="inComplete">inComplete</option>
          </select>
        </div>
      </div>
      <div className="mx-4 my-6 border border-black/5 shadow-md">
        <table className=" w-full text-left text-sm  text-gray-500 rtl:text-right dark:text-gray-400">
          {/* table headings - top row */}
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">description</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Priority</th>
              <th scope="col" className="px-6 py-3">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                edit
              </th>
              <th className="px-6 py-3">delete</th>
              <th className="whitespace-nowrap px-6 py-3">Make complete</th>
            </tr>
          </thead>
          {/* table body - rest row */}
          <tbody>
            {datas?.map((data, idx) => (
              <tr
                key={idx}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {data?.TaskName}
                </td>
                <td className="px-6 py-4">{data?.TaskMsg}</td>
                <td className="px-6 py-4">{data?.Status}</td>
                <td className="px-6 py-4">
                  <span className={`${data?.TaskPriority == "high" ? "bg-black px-4 py-1 rounded-lg text-white" : data?.TaskPriority == "medium" ? "bg-sky-500 px-4 py-1 rounded-lg text-white" : data?.TaskPriority == "low" ? "bg-emerald-500 px-4 py-1 rounded-lg text-white" : ""}`}>
                    {data?.TaskPriority}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {data?.TaskDeadline}
                </td>
                <td className="px-6 py-4">
                  <Link className="flex items-center" to={`/editTask/${data?._id}`}>
                    <FaRegEdit className="rounded-lg bg-amber-500 py-[6px] text-[30px] text-white" />
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <BiSolidTrash onClick={() => handleDelete(data?._id)} className=" rounded-lg bg-red-500 py-[6px] text-[30px] text-white" />
                </td>

                <td className="px-6 py-4">
                  <button
                  onClick={data?.Status == "inComplete" ? ()=>handleComplete(data?._id) : ""}
                    className={` ${data?.Status == "inComplete" ? "" : "cursor-not-allowed bg-slate-400 active:bg-slate-400"} flex items-center rounded-lg bg-green-500 px-4 py-1 text-lg text-white active:bg-green-600`}
                  >
                    complete
                    <LuCheckSquare className="rounded-lg py-[6px] text-[30px] text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllTask;
