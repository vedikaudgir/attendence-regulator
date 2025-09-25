import React from "react";

function Sidebar({ subjects, onAdd, onSelect, selectedIndex }) {
    return (
        <div className="sidebar">
            <button className="add-subject" onClick={onAdd}>
                + Add subject
            </button>

            <ul className="subject-list">
                {subjects.map((s, i) => (
                    <li
                        key={i}
                        className={i === selectedIndex ? "active" : ""}
                        onClick={() => onSelect(i)}
                    >
                        {s.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
