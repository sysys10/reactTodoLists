import { FaRegCheckCircle, FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
export default function TodoLists({ todoList, setTodoList }) {
  const handleDeleate = (index) => {
    setTodoList(todoList.filter((v, i) => i !== index));
  };

  const handleToggleDone = (index) => {
    setTodoList(
      todoList.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  };
  return (
    <div className="w-full flex-1 flex flex-col p-4">
      {todoList.map((v, i) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          key={v.time}
          className="w-full h-16 flex items-center justify-between border-b border-b-gray-400 text-xl"
        >
          <span onClick={() => handleToggleDone(i)} className="text-3xl mx-4">
            {v.done ? (
              <FaRegCheckCircle className="text-emerald-500" />
            ) : (
              <FaRegCheckCircle className="text-gray-500" />
            )}
          </span>
          <p className="flex-1 ">{v.text}</p>
          <p className="text-sm w-20">{v.time}</p>
          <FaTrashAlt
            className="text-gray-500 hover:text-red-500"
            onClick={() => {
              handleDeleate(i);
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
