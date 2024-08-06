import PropTypes from "prop-types";

const TodoCard = ({
  Tname,
  Tdes,
  status,
  deleteTodo,
  id,
  loadEditTodo,
  updateStatus,
}) => {
  return (
    <div className="card bg-success-subtle ">
      <div className="card-body">
        <h5 className="mt-2">Name : {Tname}</h5>
        <h6 className="mt-3">Description : {Tdes}</h6>
        <h5>
          Status :
          <select
            className="mt-3"
            value={status}
            onChange={(e) => updateStatus(id, e.target.value)}
          >
            <option value="not completed" className="bg-danger text-white ">
              Not Completed
            </option>
            <option value="completed" className="bg-success text-white">
              Completed
            </option>
          </select>
        </h5>
        <div className="float-end mt-4">
          <button
            className="btn btn-warning me-3 ps-4 pe-4"
            onClick={() => loadEditTodo({ Tname, Tdes, status, id })}
          >
            Edit
          </button>

          <button
            className="btn btn-danger  ps-4 pe-4"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

TodoCard.propTypes = {
  Tname: PropTypes.string,
  Tdes: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.string,
  deleteTodo: PropTypes.func,
  loadEditTodo: PropTypes.func,
  updateStatus: PropTypes.func,
};

export default TodoCard;
