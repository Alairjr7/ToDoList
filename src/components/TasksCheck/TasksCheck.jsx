import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function TasksCheck({ arrayTasksCheck, clickRemoveCheck }) {
  return (
    <div>
      {arrayTasksCheck.length > 0 && (
        <div className="flex flex-col gap-3">
          {arrayTasksCheck.map((taskCheck, index) => (
            <div
              key={index}
              className="bg-white h-auto p-4 rounded-lg border border-[#D1CBD7] relative flex gap-3  justify-between opacity-0 
              motion-safe:animate-[slideIn_0.3s_ease-out_forwards]"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex gap-3 items-start ">
                <FaCheckCircle className="text-green-700 " />
                <p className="text-[#262428] text-sm text-justify line-through font-sans font-light">
                  {taskCheck}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <MdDeleteOutline
                  className="text-[#6B6572] text-xl cursor-pointer transition-opacity duration-300 ease-in-out hover:text-check"
                  onClick={() => clickRemoveCheck(index)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
