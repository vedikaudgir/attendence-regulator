import React from "react";
import AttendanceChart from "./attendanceChart";

function SubjectDetail({ subject, index, onUpdate }) {
    const total = subject.attended + subject.bunked;

    return (
        <div className="subject-detail">
            <h2 className="subject-title">{subject.name}</h2>

            <div className="detail-body">
                <div className="button-area">
                    <button
                        className="present"
                        onClick={() => onUpdate(index, "attend")}
                    >
                        Attended
                    </button>

                    <button className="bunked" onClick={() => onUpdate(index, "bunk")}>
                        Bunked
                    </button>

                    <div style={{ marginTop: 12, color: "#333", fontSize: 14 }}>
                        Total: <strong>{total}</strong>
                        <br />
                        Attended: <strong>{subject.attended}</strong>
                        {"  "} Bunked: <strong>{subject.bunked}</strong>
                    </div>
                </div>

                <AttendanceChart attended={subject.attended} bunked={subject.bunked} />
            </div>
        </div>
    );
}

export default SubjectDetail;
