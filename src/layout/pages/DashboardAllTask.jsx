import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardAllTask = () => {
    const [status,setStatus] = useState("all")
    const [datas,setDatas] = useState([])

    useEffect(() => {
     const  Fetching = async() => {
        const response = await axios.get(`http://localhost:5000/tasks?value=${status}`);
     setDatas(response.data)

     }
     Fetching();

    }, [status]);

console.log(datas)


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
              <th className="px-6 py-3">
                Title
              </th>
              <th className="px-6 py-3">
                description
              </th>
              <th className="px-6 py-3">
                Status
              </th>
              <th className="px-6 py-3">
                Priority
              </th>
              <th scope="col" className="px-6 py-3">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                edit
              </th>
              <th className="px-6 py-3">
                delete
              </th>
              <th  className="px-6 py-3">
                complete
              </th>
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
                <td className="px-6 py-4">{data?.TaskPriority}</td>
                <td className="px-6 py-4 whitespace-nowrap">{data?.TaskDeadline}</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>

                <td className="px-6 py-4">
                  <Link className="px-4 py-1 bg-yellow-200" to={"/"}>Edit</Link>
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
