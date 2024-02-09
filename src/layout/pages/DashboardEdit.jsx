import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardEdit = () => {
    const {id} = useParams()

    const [selectedPriority, setSelectedPriority] = useState("");
    


  const handleSubmit = (e) => {
    e.preventDefault();
    const TaskName = e.target.name.value;
    const TaskMsg = e.target.description.value;
    const TaskDeadline = e.target.time.value;
    const TaskPriority = selectedPriority;
    
    const Status = "complete";
    const info = {
      TaskName,
      TaskMsg,
      TaskDeadline,
      TaskPriority,
      Status,
    };
    axios
      .put(`http://localhost:5000/editTask?id=${id}`, info)
      .then(() => {
        e.target.reset();
        toast.success("Successfully Edited!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {});
  };
    return (
      <div className="mx-auto w-full md:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="max-w-[500px] space-y-4  rounded-xl  px-4 py-10 ">
            <h1 className="pb-4 text-4xl font-medium text-center">Edit Your Task</h1>
            {/* title  */}
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Task Name :
              </label>
              <input
                name="name"
                type="text"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="John"
                required
              />
            </div>
            {/* text area  */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Task message :
              </label>
              <textarea
                name="description"
                id="message"
                rows="4"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            {/* date  */}
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Task Deadline :
              </label>
              <input
                name="time"
                type="date"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="John"
                required
              />
            </div>
            {/* select  */}
            <div>
              <label
                htmlFor="countries"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Task Priority :
              </label>
              <select
                id="countries"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
              >
                <option selected>Choose Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className='flex justify-center'>
              <button type='submit' className="rounded  border border-black px-6 py-2 text-sm duration-500 ease-in-out hover:bg-black hover:text-white md:text-base ">
                Edit Task
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default DashboardEdit;