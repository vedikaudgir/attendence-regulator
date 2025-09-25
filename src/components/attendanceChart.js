import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

function AttendanceChart({ attended, bunked }) {
    const total = attended + bunked;
    const percentage = total === 0 ? 0 : Math.round((attended / total) * 100);

    const data = {
        labels: ["Attended", "Bunked"],
        datasets: [
            {
                data: [attended, bunked],
                backgroundColor: ["#27ae60", "#e74c3c"],
                borderWidth: 1
            }
        ]
    };

    const options = {
        cutout: "70%",
        plugins: { legend: { display: false } },
        maintainAspectRatio: true
    };

    return (
        <div style={{ width: 180, height: 180, position: "relative" }}>
            <Doughnut data={data} options={options} />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#222"
                }}
            >
                {percentage}% <br />
                <span style={{ fontSize: 13, fontWeight: 500 }}>
                    {attended}/{total || 0}
                </span>
            </div>
        </div>
    );
}

export default AttendanceChart;