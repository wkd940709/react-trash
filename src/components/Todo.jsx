import React from "react";

function Todo({ title, content, deleteTodo }) {
  return (
    <div className="border border-indigo-600 w-1/5 text-center">
      <div className="p-8">{title}</div>
      <div className="p-8">{content}</div>
      <button className="bg-orange-500 p-2" onClick={deleteTodo}>삭제</button>
    </div>
  );
}

export default Todo;
