import React, { useState } from "react";
const Marks = () => {
  let [marks, setMarks] = useState(80);
  let updateMarks = () => {
    console.log(`previous marks ${marks}`);
    setMarks(85);
    console.log(`updated marks ${marks}`);
  };
  return (
    // Using Tailwind CSS
    <div>
      <p className="font-bold text-xl text-blue-800">My Marks = {marks}</p>
      <button
        on
        onClick={updateMarks}
        className="bg-blue-950 px-5 py-2 rounded mt-5 text-white font-extrabold"
      >
        Update Marks
      </button>
    </div>
  );
};
export default Marks;
