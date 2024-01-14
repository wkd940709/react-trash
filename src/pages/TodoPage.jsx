import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { v4 as uuidv4 } from "uuid";
import NavBar from "../components/NavBar";
import axios from "axios";

function TodoPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //   const [todoList, setTodoList] = useState([
  //     { id: uuidv4(), title: "제목1", content: "내용1" },
  //     { id: uuidv4(), title: "제목2", content: "내용2" },
  //   ]);

  const [todoList, setTodoList] = useState([]);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const createTodo = async () => {
    try {
      const response = await axios.post("http://localhost:3001/todo", {
        id: uuidv4(),
        title: title,
        content: content,
      });

      console.log("Todo created:", response.data);

      setTodoList([...todoList, response.data]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };
  const deleteTodo = async (id) => {
    try {
        console.log(id)
      await axios.delete(`http://localhost:3001/todo/${id}`);
      console.log("Todo deleted:", id);

      const updatedTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/todo");
        console.log(response.data);
        setTodoList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // async 함수를 호출
  }, []);
  return (
    <div>
      <NavBar />
      <h1>Todo를 입력하세요</h1>
      <input
        type="text"
        value={title}
        onChange={changeTitle}
        placeholder="제목을 입력하세요"
      />
      <input
        type="text"
        value={content}
        onChange={changeContent}
        placeholder="내용을 입력하세요"
      />
      <button className="bg-sky-500 p-2" onClick={createTodo}>
        등록
      </button>
      <h1>Todo 목록</h1>
      <div className="flex flex-wrap gap-4">
        {todoList.map((todo, idx) => {
          return (
            <Todo
              key={idx}
              title={todo.title}
              content={todo.content}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoPage;
