import React, { useState } from "react";
import AttendanceChart from "./components/attendanceChart";

function App() {
  const [attended, setAttended] = useState(10);
  const [bunked, setBunked] = useState(3);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Attendance Regulator</h1>

      <AttendanceChart attended={attended} bunked={bunked} />

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => setAttended(attended + 1)}>Present</button>
        <button onClick={() => setBunked(bunked + 1)}>Bunked</button>
      </div>
    </div>
  );
}

export default App;
