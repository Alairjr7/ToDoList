import { useState, useEffect } from "react";

import Logo from "../assets/Logo.svg";

import { MdOutlineAddCircleOutline } from "react-icons/md";
import Tasks from "../components/Tasks/Tasks";
import TasksCheck from "../components/TasksCheck/TasksCheck";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [arrayTasks, setArrayTasks] = useState([]);
  const [arrayTasksCheck, setArrayTasksCheck] = useState([]);
  const [changeColor, setChangeColor] = useState(true);
  

  useEffect(() => {
    const getDataTaskLocalStorage = localStorage.getItem("tasks");
    const getDataTaskCheckLocalStorage = localStorage.getItem("tasksCheck");

    if (getDataTaskLocalStorage) {
      setArrayTasks(JSON.parse(getDataTaskLocalStorage));
    } else {
      setArrayTasks([]);
    }

    if (getDataTaskCheckLocalStorage) {
      setArrayTasksCheck(JSON.parse(getDataTaskCheckLocalStorage));
    } else {
      setArrayTasksCheck([]);
    }
  }, []);

  const setLocalStorage = (key, array) =>
    localStorage.setItem(key, JSON.stringify(array));

  const handleClick = () => {
    if (inputValue !== "") {
      const updateTasks = [...arrayTasks, inputValue];
      setArrayTasks(updateTasks);
      setLocalStorage("tasks", updateTasks);
      setInputValue("");
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const handleClickCheck = (index) => {
    const taskSelect = arrayTasks[index];
    const updateTasksCheck = [...arrayTasksCheck, taskSelect];
    setArrayTasksCheck(updateTasksCheck);
    setLocalStorage("tasksCheck", updateTasksCheck);

    const updatedTasks = arrayTasks.filter((_, id) => id !== index);
    setArrayTasks(updatedTasks);
    setLocalStorage("tasks", updatedTasks);
  };

  const handleClickRemove = (index) => {
    const updatedTasks = arrayTasks.filter((_, id) => id !== index);
    setArrayTasks(updatedTasks);
    setLocalStorage("tasks", updatedTasks);
  };

  const handleClickRemoveCheck = (index) => {
    const updatedTasks = arrayTasksCheck.filter((_, id) => id !== index);
    setArrayTasksCheck(updatedTasks);
    setLocalStorage("tasksCheck", updatedTasks);
  };

  return (
    <>
      <main className="flex flex-col gap-20">
        <header className="flex flex-col items-center justify-center w-screen h-52 bg-header relative">
          <img src={Logo} alt="logo" />
          <div className="flex  flex-col gap-4 absolute bottom-0 translate-y-1/2">
            <div className="flex gap-2">
              <input
                type="text"
                name="taskName"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleClick();
                  }
                }}
                placeholder="Adicone uma nova tarefa"
                className={`p-4 w-[38.62rem] max-sm:w-[16.68rem] h-14 rounded-lg outline-none border placeholder:text-paragraph ${
                  changeColor ? " border-header" : "border-red-600"
                }`}
              />
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center justify-center gap-2 text-[#F0EDF2] text-sm font-bold bg-button py-4 px-6 rounded-lg transition-opacity duration-200 ease-in-out hover:opacity-90"
              >
                <span className="sm:inline hidden">Criar</span>
                 <MdOutlineAddCircleOutline className="max-sm:text-lg"/>
              </button>
            </div>
            {changeColor === false && (
              <p className="text-red-600 text-xs">
                Ops! Parece que você esqueceu de digitar a tarefa. Tente
                novamente!
              </p>
            )}
          </div>
        </header>

        <section className="flex w-screen justify-center">
          <div className=" flex flex-col w-screen mx-auto lg:w-1/2 px-3 gap-6 ">
            <div className="flex justify-between items-center ">
              <p className="flex items-center gap-4 text-paragraph font-semibold text-xs tex ">
                Tarefas criadas{" "}
                <span className="bg-[#DDD2EF] px-2 py-1 rounded-full text-button">
                  {arrayTasks.length}
                </span>
              </p>
              <p className="flex items-center gap-4 text-paragraph font-semibold text-xs tex ">
                Concluídas{" "}
                <span className="bg-[#BFE3D0] px-2 py-1 rounded-full text-[#2D6C4A]">
                  {arrayTasksCheck.length}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3 ">
              <div>
                <Tasks
                  arrayTasks={arrayTasks}
                  clickCheck={handleClickCheck}
                  arrayTasksCheck={arrayTasksCheck}
                  clickRemove={handleClickRemove}
                />
              </div>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  arrayTasksCheck.length > 0
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <TasksCheck
                  arrayTasksCheck={arrayTasksCheck}
                  clickRemoveCheck={handleClickRemoveCheck}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ToDoList;
