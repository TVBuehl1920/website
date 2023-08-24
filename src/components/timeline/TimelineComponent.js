
import React, { useState, useEffect } from "react";

function TimelineComponent({ data }) {
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    const sortedData = data.sort((a, b) => b.node.year - a.node.year)
    setTimelineData(sortedData)
  }, [data])

  return (
    <section>
      <div className="py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row ">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 ">
            {/* <p className="ml-2 text-red-800 uppercase tracking-loose">
              Geschichte
            </p> */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Geschichte Turnverein 1920 Bühl e.V.
            </h1>
            <p className="md:text-base text-lg leading-8 text-gray-700 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-1 md:p-10 h-full">
                <div
                  className="border-2-2 border-red-800 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #ef4444",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-red-800 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #ef4444",
                    borderRadius: "1%",
                  }}
                ></div>
                {timelineData.map((event, index) => (
                  <div
                    key={index}
                    className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0
                      ? "flex-row-reverse left-timeline"
                      : "right-timeline"
                      }`}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      {/* <p className="mb-3 text-base text-red-800">1-6 May, 2021</p> */}
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        {event.node.year}
                      </h4>
                      <div
                        className=" text-sm md:text-lg leading-8 text-gray-700 text-opacity-100"
                        dangerouslySetInnerHTML={{ __html: event.node.text }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TimelineComponent
