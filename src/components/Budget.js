import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [editingBudget, setEditingBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleEditBudget = () => {
    setEditingBudget(true);
  };

  const handleSaveBudget = () => {
    dispatch({
      type: 'EDIT_BUDGET',
      payload: newBudget,
    });
    setEditingBudget(false);
  };

  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      <div>
        {editingBudget ? (
          <div className="d-flex">
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              className="form-control mr-2"
            />
            <button onClick={handleSaveBudget} className="btn btn-success">
              Save
            </button>
          </div>
        ) : (
          <span>Budget: {budget}</span>
        )}
      </div>
      {!editingBudget && (
        <button
          onClick={handleEditBudget}
          className="btn btn-primary btn-sm"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default Budget;

