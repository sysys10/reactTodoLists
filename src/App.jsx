import React, { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoLists from "./components/TodoLists";
import TodoInsert from "./components/TodoInsert";
import { FaPlus } from "react-icons/fa";
const todofirst = [
  {
    done: true,
    text: "오늘은 투두리스트를 만들어봤다!",
    time: "00 : 00 : 00",
  },
  {
    done: false,
    text: "밥먹기",
    time: "12 : 30 : 00",
  },
  {
    done: true,
    text: "푹 쉬고",
    time: "20 : 00 : 00",
  }
];

function App() {
  const [date, setDate] = useState(new Date());
  const [todoList, setTodoList] = useState(todofirst);
  const [insert, setInsert] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const Day = ["일", "월", "화", "수", "목", "금", "토"];
  const 날짜 = `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, "0")}월 ${String(date.getDate()).padStart(2, "0")}일 ${Day[date.getDay()]}요일`;
  const 시간 = `${date.getHours()} : ${String(date.getMinutes()).padStart(2, "0")} : ${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="flex relative flex-col justify-between h-[720px] w-[540px] rounded-3xl bg-gray-100">
        <TodoHeader todoList={todoList} 날짜={날짜} 시간={시간} />
        <TodoLists todoList={todoList} setTodoList={setTodoList} />
        {!insert && (
          <TodoInsert
            todoList={todoList}
            setTodoList={setTodoList}
            시간={시간}
          />
        )}
        <div
          onClick={() => {
            setInsert(!insert);
          }}
          className={`${insert === false ? "bg-red-300 rotate-45" : "bg-emerald-400"} absolute w-20 h-20 transition-all duration-100 rounded-full bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 text-5xl flex items-center justify-center text-white`}
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
}
export default App;
