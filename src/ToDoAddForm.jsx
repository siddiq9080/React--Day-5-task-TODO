import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo, editData, editTodo }) => {
  const initialValue = {
    Tname: "",
    Tdes: "",
    status: "not completed",
  };

  const [formState, setFormState] = useState(initialValue);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      editTodo(formState, editData.id);
    } else {
      addTodo(formState);
    }
    setFormState(initialValue);
  };

  useEffect(() => {
    if (editData) {
      setFormState(editData);
    }
  }, [editData]);

  return (
    <>
      <h1 className="text-center text-success mb-5 mt-4">My TODO</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            style={{ width: "500px", height: 40 }}
            className="ms-5 me-2 "
            type="text"
            id="name"
            name="Tname"
            required
            onChange={handleChange}
            value={formState.Tname}
            placeholder="TODO Name"
          />
        </label>

        <label htmlFor="des">
          <input
            style={{ width: "500px", height: 40 }}
            type="text"
            name="Tdes"
            id="des"
            required
            value={formState.Tdes}
            onChange={handleChange}
            placeholder="TODO Description"
          />
        </label>

        <button type="submit" className="btn btn-success ms-3">
          {editData ? "Edit" : "ADD TODO"}
        </button>
      </form>
    </>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editData: PropTypes.object,
  editTodo: PropTypes.func.isRequired,
};

export default TodoForm;
