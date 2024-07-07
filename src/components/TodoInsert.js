import { useState } from "react";

export default function TodoInsert({ todoList, setTodoList, 시간 }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { text: input, time: 시간, done: false }]);
    setInput("");
  };

  return (
    <div className="flex items-center justify-center w-full h-40 bg-emerald-200 rounded-b-3xl">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl pl-4">
        <input
          type="text"
          autoFocus
          className="w-[320px]  h-12 rounded-xl outline-none text-xl"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="할 일을 입력하세요!"
        />
        <input
          type="submit"
          value={"추가하기"}
          className="w-24 h-12 text-lg font-medium bg-gray-200 rounded-xl"
        />
      </form>
    </div>
  );
}
