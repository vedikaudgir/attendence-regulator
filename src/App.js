import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import SubjectDetail from "./components/subjectCard";
import "./App.css";

function App() {
  const [subjects, setSubjects] = useState([
    { name: "Maths", attended: 0, bunked: 0 },
    { name: "Physics", attended: 0, bunked: 0 }
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const addSubject = () => {
    const name = prompt("Enter subject name:");
    if (!name || !name.trim()) return;
    setSubjects((prev) => {
      const newArr = [...prev, { name: name.trim(), attended: 0, bunked: 0 }];
      setSelectedIndex(newArr.length - 1); // select the newly added subject
      return newArr;
    });
  };

  const updateSubject = (index, type) => {
    setSubjects((prev) =>
      prev.map((s, i) => {
        if (i !== index) return s;
        if (type === "attend") return { ...s, attended: s.attended + 1 };
        if (type === "bunk") return { ...s, bunked: s.bunked + 1 };
        return s;
      })
    );
  };

  return (
    <div className="app-container">
      <Sidebar
        subjects={subjects}
        onAdd={addSubject}
        onSelect={setSelectedIndex}
        selectedIndex={selectedIndex}
      />

      <div className="main-content">
        <h1 className="app-title">Attendance Regulator</h1>

        {subjects.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            No subjects yet — add one from the left.
          </div>
        ) : (
          <SubjectDetail
            subject={subjects[selectedIndex]}
            index={selectedIndex}
            onUpdate={updateSubject}
          />
        )}
      </div>
    </div>
  );
}

export default App;
