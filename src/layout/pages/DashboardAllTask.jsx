import React from "react";

const DashboardAllTask = () => {
    const datas = [
  {
    title: "Apple MacBook Pro 17\"",
    taskDesc: "Silver",
    status: "inComplete",
    priority: "low",
    deadLine:"2-12-2024"
  },
  {
    title: "Apple MacBook Pro 17\"",
    taskDesc: "Silver",
    status: "inComplete",
    priority: "low",
    deadLine:"2-12-2024"
  },
  {
    title: "Apple MacBook Pro 17\"",
    taskDesc: "Silver",
    status: "inComplete",
    priority: "low",
    deadLine:"2-12-2024"
  },
  {
    title: "Apple MacBook Pro 17\"",
    taskDesc: "Silver",
    status: "inComplete",
    priority: "low",
    deadLine:"2-12-2024"
  },
  {
    title: "Apple MacBook Pro 17\"",
    taskDesc: "Silver",
    status: "inComplete",
    priority: "low",
    deadLine:"2-12-2024"
  },
  
];


  return (
    <div className="relative  overflow-x-auto sm:rounded-lg">
      <div className="flex-column flex flex-wrap items-center justify-between space-y-4 pb-4 sm:flex-row sm:space-y-0">
        {/* selector  */}
        <div className="mx-4">
          <select
            className="rounded-lg border-[2px] border-gray-500/30 px-6 py-[6px] text-sm font-medium text-[#6B7280]"
            name=""
            id=""
          >
            <option value="">Last 30 days</option>
          </select>
        </div>
      </div>
      <div className="mx-4 my-6 border border-black/5 shadow-md">
        <table className=" w-full text-left text-sm  text-gray-500 rtl:text-right dark:text-gray-400">
          {/* table headings - top row */}
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                Priority
              </th>
              <th scope="col" className="px-6 py-3">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                edit
              </th>
              <th scope="col" className="px-6 py-3">
                delete
              </th>
              <th scope="col" className="px-6 py-3">
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
                  {data?.title}
                </td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
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
