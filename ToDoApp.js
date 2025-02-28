import { useState } from "react";

function ToDoApp() {
  const [inputValue, setInputValue] = useState("");
  const [arr, setArr] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setArr([...arr, inputValue]);
    setInputValue("");
  };

  const deleteItem = (index) => {
    setArr((prevItems) => prevItems.filter((_, i) => i !== index));
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">To-Do List</h1>

        {/* Input and Add Button */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter new todo"
            className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-indigo-200 mr-2"
            value={inputValue}
            onChange={handleInputValue}
          />
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 transition-colors"
            onClick={addItem}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        {arr.length === 0 ? (
          <p>No tasks added yet!</p>
        ) : (
          <ul className="list-disc list-inside">
            {arr.map((value, index) => (
              <li
                className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
                key={index}
              >
                {value}
                <button
                  className="text-red-500 hover:text-red-700 transition-colors"
                  onClick={() => {
                    deleteItem(index);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {/* <p className="text-gray-500">No tasks added yet!</p> */}
      </div>
    </div>
  );
}

export default ToDoApp;
