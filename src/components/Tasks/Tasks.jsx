import React from "react";

import { FaWpforms } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function Tasks({
  arrayTasks,
  clickCheck,
  arrayTasksCheck,
  clickRemove,
}) {
  return (
    <div>
      <div>
        {arrayTasks.length <= 0 && arrayTasksCheck.length <= 0 && (
          <div className="border-t border-header h-52 flex flex-col items-center justify-center gap-4">
            <FaWpforms className="text-5xl text-[#DDD2EF]" />
            <div>
              <p className="text-[#6B6572] font-sans font-semibold text-sm">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="text-[#6B6572] text-sm font-light ">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        )}

        {arrayTasks.length > 0 && (
          <div className="flex flex-col gap-3 transition-all duration-300">
            {arrayTasks.map((task, index) => (
              <div
                key={index}
                className="bg-header h-auto p-4 rounded-lg border border-[#D1CBD7] flex gap-3 justify-between opacity-0 
                motion-safe:animate-[slideIn_0.3s_ease-out_forwards]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                
              >
                <div className="flex gap-3 items-start cursor-pointer w-screen" onClick={() => clickCheck(index)} >
                  <input
                    type="checkbox"
                    className=" min-w-5 min-h-5 rounded-full border-2 border-check checked:border-check appearance-none cursor-pointer transition-colors duration-200"
                    
                  />
                  <p className="text-[#262428] text-sm text-justify">{task}</p>
                </div>
                <div className="flex items-center justify-center">
                  <MdDeleteOutline
                    className="text-[#6B6572] text-xl cursor-pointer transition-opacity duration-300 ease-in-out hover:text-check"
                    onClick={() => clickRemove(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
