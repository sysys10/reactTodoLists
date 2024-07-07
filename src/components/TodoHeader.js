export default function TodoHeader({todoList,날짜,시간}) {
    let todoDone = 0;
    for (let l = 0; l < todoList.length; l++){
        todoList[l].done === true && todoDone++;
    }
    return (
      
    <div className="w-full h-32 bg-gray-300 rounded-t-3xl flex flex-col p-4">
          <p className="text-2xl font-semibold">{날짜}</p>
          <p className="text-xl">{시간}</p>
        <p className="mt-1">{todoDone} / {todoList.length}</p>
    </div>
  );
}
