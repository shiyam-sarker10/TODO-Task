import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const DashboardStatistics = () => {
  const [all, setAll] = useState([]);
  const [complete, setComplete] = useState([]);
  const [inComplete, setInComplete] = useState([]);

  // fetching data

  useEffect(() => {
    const Fetching = async () => {
      const response1 = await axios.get(
        `https://experiment-server.vercel.app/tasks?value=all`,
      );
      const response2 = await axios.get(
        `https://experiment-server.vercel.app/tasks?value=complete`,
      );
      const response3 = await axios.get(
        `https://experiment-server.vercel.app/tasks?value=inComplete`,
      );
      setAll(response1.data);
      setComplete(response2.data);
      setInComplete(response3.data);
    };
    Fetching();
  }, []);
  console.log(all, complete, inComplete);

   const data = [
     ["Task", "Hours per Day"],
     ["Total Task", all.length],
     ["inComplete Task", complete.length],
     ["Complete Task", inComplete.length],
   ];
    const options = {
      title: "My Daily Activities",
    };
    return (
      <div>
        <div className="flex flex-wrap justify-center gap-8 py-10">
          {/* total task card  */}
          <div className="flex w-[300px] flex-col items-center rounded-2xl bg-white p-8 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="70"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#5b5b68"
                  d="M409.852 92.895v359.87c0 24.731-15.227 45.91-36.82 54.65a58.596 58.596 0 0 1-22.122 4.304H58.953C26.391 511.719 0 485.316 0 452.766V92.895c0-32.563 26.39-58.95 58.953-58.95H350.91c32.55 0 58.942 26.387 58.942 58.95zm0 0"
                  opacity="1"
                  data-original="#5b5b68"
                ></path>
                <path
                  fill="#e2eff2"
                  d="M364.508 92.895v359.87c0 7.5-6.098 13.598-13.598 13.598H58.953c-7.5 0-13.598-6.097-13.598-13.597V92.895c0-7.497 6.098-13.598 13.598-13.598H350.91c7.5 0 13.598 6.101 13.598 13.598zm0 0"
                  opacity="1"
                  data-original="#e2eff2"
                ></path>
                <path
                  fill="#fed563"
                  d="M288.566 97.219H121.29c-13.96 0-25.277-11.317-25.277-25.278V25.277C96.012 11.317 107.328 0 121.289 0h167.277c13.961 0 25.278 11.316 25.278 25.277v46.664c0 13.961-11.317 25.278-25.278 25.278zm0 0"
                  opacity="1"
                  data-original="#fed563"
                ></path>
                <g fill="#40404c">
                  <path
                    d="M409.852 220.805v231.96c0 24.731-15.227 45.91-36.82 54.65a154.132 154.132 0 0 1-28.137 4.304c-3.122.187-6.254.281-9.418.281-3.164 0-6.297-.094-9.422-.281-81.258-4.867-145.66-72.32-145.66-154.801 0-85.652 69.437-155.078 155.082-155.078 26.941 0 52.3 6.87 74.375 18.965zM180.582 48.32c0 12.688-10.285 22.973-22.973 22.973-12.691 0-22.976-10.285-22.976-22.973 0-12.691 10.285-22.976 22.976-22.976 12.688 0 22.973 10.285 22.973 22.976zM275.223 48.32c0 12.688-10.286 22.973-22.973 22.973s-22.977-10.285-22.977-22.973c0-12.691 10.29-22.976 22.977-22.976s22.973 10.285 22.973 22.976zm0 0"
                    fill="#40404c"
                    opacity="1"
                    data-original="#40404c"
                  ></path>
                </g>
                <path
                  fill="#bbd8dd"
                  d="M364.508 204.555v248.21c0 7.5-6.098 13.598-13.598 13.598H225.605c-27.937-28.039-45.21-66.722-45.21-109.445 0-85.652 69.425-155.078 155.082-155.078 9.921 0 19.62.926 29.03 2.715zm0 0"
                  opacity="1"
                  data-original="#bbd8dd"
                ></path>
                <path
                  fill="#55c7f3"
                  d="M507.781 356.914c0 85.649-69.43 155.082-155.078 155.082s-155.082-69.434-155.082-155.082 69.434-155.082 155.082-155.082 155.078 69.434 155.078 155.082zm0 0"
                  opacity="1"
                  data-original="#55c7f3"
                ></path>
                <path
                  fill="#dafdfd"
                  d="M465.91 356.914c0 62.524-50.68 113.215-113.203 113.215-5.492 0-10.902-.387-16.187-1.16-54.86-7.84-97.028-55.024-97.028-112.055 0-57.027 42.168-104.21 97.028-112.055a111.802 111.802 0 0 1 16.187-1.16c62.52 0 113.203 50.692 113.203 113.215zm0 0"
                  opacity="1"
                  data-original="#dafdfd"
                ></path>
                <path
                  fill="#56d8d8"
                  d="M433.535 356.914c0 57.031-42.156 104.215-97.015 112.055-54.86-7.84-97.028-55.024-97.028-112.055 0-57.027 42.168-104.21 97.028-112.055 54.859 7.844 97.015 55.028 97.015 112.055zm0 0"
                  opacity="1"
                  data-original="#56d8d8"
                ></path>
                <path
                  fill="#17a3ce"
                  d="M352.703 477.957c-66.746 0-121.043-54.3-121.043-121.043 0-66.742 54.297-121.043 121.043-121.043 66.742 0 121.043 54.3 121.043 121.043 0 66.742-54.3 121.043-121.043 121.043zm0-226.418c-58.105 0-105.379 47.27-105.379 105.375 0 58.106 47.274 105.379 105.38 105.379s105.374-47.273 105.374-105.379c0-58.105-47.27-105.375-105.375-105.375zm0 0"
                  opacity="1"
                  data-original="#17a3ce"
                ></path>
                <path
                  fill="#5b5b68"
                  d="M393.957 372.578h-41.254c-8.652 0-15.664-7.012-15.664-15.664v-70.488c0-8.653 7.012-15.664 15.664-15.664 8.649 0 15.664 7.011 15.664 15.664v54.824h25.59c8.648 0 15.664 7.016 15.664 15.664 0 8.652-7.012 15.664-15.664 15.664zm0 0"
                  opacity="1"
                  data-original="#5b5b68"
                ></path>
                <path
                  fill="#fc315f"
                  d="M120.871 244.488c-3.793 0-7.383-1.82-9.621-4.93l-32.406-45.05c-3.824-5.317-2.614-12.727 2.703-16.547 5.316-3.824 12.723-2.613 16.547 2.7l20.894 29.046 27.617-55.832c2.903-5.867 10.012-8.273 15.883-5.371 5.867 2.902 8.274 10.016 5.371 15.883l-36.355 73.504a11.858 11.858 0 0 1-10.633 6.597zM120.871 390.473c-3.793 0-7.383-1.82-9.621-4.934l-32.406-45.05c-3.824-5.317-2.614-12.723 2.703-16.548 5.316-3.824 12.723-2.613 16.547 2.704l20.894 29.046 27.617-55.832c2.903-5.87 10.012-8.277 15.883-5.37 5.867 2.902 8.274 10.011 5.371 15.882l-36.355 73.5a11.858 11.858 0 0 1-9.656 6.559c-.325.03-.653.043-.977.043zm0 0"
                  opacity="1"
                  data-original="#fc315f"
                ></path>
                <path
                  fill="#5b5b68"
                  d="M286.512 197.469h-89.285c-4.325 0-7.832-3.508-7.832-7.832s3.507-7.832 7.832-7.832h89.285a7.833 7.833 0 0 1 0 15.664zm0 0"
                  opacity="1"
                  data-original="#5b5b68"
                ></path>
              </g>
            </svg>
            <div className=" py-6 text-center">
              <h1 className="text-xl font-medium text-[#3F415A]">Total Task</h1>
              <h1 className="text-3xl font-semibold text-[#3F415A]">50</h1>
            </div>
          </div>
          {/* incomplete Task  */}
          <div className="flex w-[300px] flex-col items-center rounded-2xl bg-white  p-8 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="70"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#bd6428"
                  d="M337.33 83.8h68.33V481H106.34V83.8h68.33"
                  opacity="1"
                  data-original="#bd6428"
                ></path>
                <path
                  fill="#fff6e9"
                  d="M358.4 104.89h22.47v346.38H131.13V104.89h23.03"
                  opacity="1"
                  data-original="#fff6e9"
                ></path>
                <path
                  fill="#bcbec0"
                  d="M341.46 155.15H170.54c-11.79 0-21.38-9.59-21.38-21.38V94.88c0-2.76 2.24-5 5-5h20.51v10h-15.51v33.88c0 6.27 5.1 11.38 11.38 11.38h170.92c6.27 0 11.38-5.1 11.38-11.38V99.88h-15.51v-10h20.51c2.76 0 5 2.24 5 5v38.88c0 11.79-9.59 21.39-21.38 21.39z"
                  opacity="1"
                  data-original="#bcbec0"
                ></path>
                <path
                  fill="#6d6e71"
                  d="M300.69 64.15h36.64v59.39H174.67V64.15h36.64v-6.07c0-14.95 12.12-27.07 27.07-27.07h35.23c14.95 0 27.07 12.12 27.07 27.07v6.07"
                  opacity="1"
                  data-original="#6d6e71"
                ></path>
                <circle
                  cx="256"
                  cy="63.27"
                  r="12.8"
                  fill="#ffffff"
                  opacity="1"
                  data-original="#ffffff"
                ></circle>
                <circle
                  cx="256"
                  cy="309.7"
                  r="92.07"
                  fill="#ea3f5c"
                  opacity="1"
                  data-original="#ea3f5c"
                ></circle>
                <path
                  fill="#ffffff"
                  d="m263.07 309.7 33.11-33.11c1.95-1.95 1.95-5.12 0-7.07s-5.12-1.95-7.07 0L256 302.63l-33.11-33.11c-1.95-1.95-5.12-1.95-7.07 0s-1.95 5.12 0 7.07l33.11 33.11-33.11 33.11a5.003 5.003 0 0 0 0 7.07c.98.98 2.26 1.46 3.54 1.46s2.56-.49 3.54-1.46l33.1-33.11 33.11 33.11c.98.98 2.26 1.46 3.54 1.46s2.56-.49 3.54-1.46a5.003 5.003 0 0 0 0-7.07z"
                  opacity="1"
                  data-original="#ffffff"
                ></path>
              </g>
            </svg>
            <div className=" py-6 text-center">
              <h1 className="text-xl font-medium text-[#3F415A]">
                Incomplete Task
              </h1>
              <h1 className="text-3xl font-semibold text-[#3F415A]">50</h1>
            </div>
          </div>
          {/* completed Task  */}
          <div className="flex w-[300px] flex-col items-center rounded-2xl  bg-white p-8 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="70"
              x="0"
              y="0"
              viewBox="0 0 60 60"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#703d36"
                  d="M41 53V9a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v44a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3z"
                  opacity="1"
                  data-original="#703d36"
                ></path>
                <path
                  fill="#ffffff"
                  d="M37 52V11c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v40c0 .55.45 1 1 1z"
                  opacity="1"
                  data-original="#ffffff"
                ></path>
                <path
                  fill="#dce4ea"
                  d="M28 6v4a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2a1 1 0 0 1 1 1z"
                  opacity="1"
                  data-original="#dce4ea"
                ></path>
                <circle
                  cx="41"
                  cy="41"
                  r="18"
                  fill="#2aa869"
                  opacity="1"
                  data-original="#2aa869"
                ></circle>
                <path
                  fill="#ffffff"
                  d="m31.384 45.339 5.936 4.433a1.146 1.146 0 0 0 1.545-.161L50.763 36.07a.951.951 0 0 0-.123-1.374l-3.121-2.487a.962.962 0 0 0-1.406.229l-7.946 12.309-3.039-3.782a.96.96 0 0 0-1.497 0l-2.421 3.013a.952.952 0 0 0 .173 1.36z"
                  opacity="1"
                  data-original="#ffffff"
                ></path>
                <path
                  fill="#bcc7ce"
                  d="M21 6.016c-.553 0-1-.432-1-.984v-.031a1 1 0 1 1 2 0c0 .553-.447 1.016-1 1.016zM24 21H10a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"
                  opacity="1"
                  data-original="#bcc7ce"
                ></path>
                <path
                  fill="#2aa869"
                  d="M30 22a.995.995 0 0 1-.707-.293l-1-1a.999.999 0 1 1 1.414-1.414l.185.185 2.309-3.077A1 1 0 0 1 33.8 17.6l-3 4a.996.996 0 0 1-.8.4z"
                  opacity="1"
                  data-original="#2aa869"
                ></path>
                <g fill="#bcc7ce">
                  <path
                    d="M21 32H10a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2zM18 43h-8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
                    fill="#bcc7ce"
                    opacity="1"
                    data-original="#bcc7ce"
                  ></path>
                </g>
              </g>
            </svg>
            <div className=" py-6 text-center">
              <h1 className="text-xl font-medium text-[#3F415A]">
                Completed Task
              </h1>
              <h1 className="text-3xl font-semibold text-[#3F415A]">50</h1>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white  shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] overflow-hidden">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    );
};

export default DashboardStatistics;