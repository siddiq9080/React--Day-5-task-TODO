import { useState } from "react";
import TodoForm from "./ToDoAddForm";
import TodoCard from "./ToDoCard";
import { v4 as uuidv4 } from "uuid";

const ToDoMain = () => {
  const [todos, setTodos] = useState([]);
  const [editData, setEditData] = useState(null);
  const [filter, setFilter] = useState("all");

  const addTodo = (formDetails) => {
    const todo = {
      ...formDetails,
      id: uuidv4(),
    };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const loadEditTodo = (todo) => {
    setEditData(todo);
  };

  const editTodo = (formState, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...formState } : todo))
    );
    setEditData(null);
  };

  const updateStatus = (id, status) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  const filteredTodos = todos.filter(
    (todo) => filter === "all" || todo.status === filter
  );

  return (
    <div>
      <TodoForm addTodo={addTodo} editTodo={editTodo} editData={editData} />
      <div className="container my-3">
        <div className="mb-3 w-10 float-end">
          <h3 className="mt-4">Status Filter :</h3>
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="row g-3">
          <h1 className="mt-3">My ToDos</h1>
          {filteredTodos.map((todo) => (
            <div className="col-md-4 mt-5" key={todo.id}>
              <TodoCard
                {...todo}
                deleteTodo={deleteTodo}
                loadEditTodo={loadEditTodo}
                updateStatus={updateStatus}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoMain;
