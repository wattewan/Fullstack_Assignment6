import React from "react";





function ClearButton(props) {
    
    return (
      <button
        type="submit"
        className="btn btn__primary btn__lg"
        onClick={() => props.clearTasks()}
      >
          Clear Tasks
      </button>
    );
  }

export default ClearButton;