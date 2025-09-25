import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function AttendanceChart({ attended, bunked }) {
    const total = attended + bunked;
    const percentage = total === 0 ? 0 : Math.round((attended / total) * 100);

    const data = {
        labels: ["Attended", "Bunked"],
        datasets: [
            {
                data: [attended, bunked],
                backgroundColor: ["#27ae60", "#e74c3c"], // green & red
                borderWidth: 1,
            },
        ],
    };

    const options = {
        cutout: "70%", // makes it donut-shaped
        plugins: {
            legend: {
                display: false, // hides side legend
            },
        },
    };

    return (
        <div style={{ width: "250px", margin: "20px auto", textAlign: "center" }}>
            <Doughnut data={data} options={options} />

            {/* Counter in the middle */}
            <div
                style={{
                    position: "relative",
                    top: "-150px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333",
                }}
            >
                {percentage}% <br />
                <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                    {attended}/{total} Classes
                </span>
            </div>
        </div>
    );
}

export default AttendanceChart;
