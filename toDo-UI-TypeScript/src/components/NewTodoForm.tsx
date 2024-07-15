import React, { FormEvent } from "react";
import { useState } from "react";

interface TodoFormProps {
  addTodo: (description: string, assigned: string) => void;
}

export const NewTodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [assigned, setAssigned] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (description !== "" && assigned !== "") {
      addTodo(description, assigned);
      setAssigned("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Assigned
            <input
              type="text"
              className="form-control"
              value={assigned}
              onChange={(e) => setAssigned(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Description
            <textarea
              rows={3}
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Todo
        </button>
      </form>
    </div>
  );
};
