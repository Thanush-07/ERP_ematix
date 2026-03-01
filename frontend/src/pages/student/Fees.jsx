import React from "react";
import "../Parent/styles/Parent.css";

export default function StudentFees() {
    const fees = [
        { type: "Tuition Fee", amount: "₹ 25,000", status: "Paid", date: "2024-01-15" },
        { type: "Bus Fee", amount: "₹ 5,000", status: "Paid", date: "2024-01-15" },
        { type: "Exam Fee", amount: "₹ 1,500", status: "Pending", date: "-" },
    ];

    return (
        <div className="parent-fees-page">
            <div className="dashboard-header">
                <h1>Fee Structure & History</h1>
                <p>Review your payments and upcoming dues</p>
            </div>

            <div className="fees-summary summary-cards">
                <div className="summary-card">
                    <div className="card-info">
                        <span className="card-label">Total Fee Paid</span>
                        <span className="card-value">₹ 30,000</span>
                    </div>
                </div>
                <div className="summary-card">
                    <div className="card-info" style={{ color: '#ef4444' }}>
                        <span className="card-label">Pending Amount</span>
                        <span className="card-value">₹ 1,500</span>
                    </div>
                </div>
            </div>

            <div className="fees-table-container glass-card">
                <table className="parent-table">
                    <thead>
                        <tr>
                            <th>Fee Category</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fees.map((f, i) => (
                            <tr key={i}>
                                <td>{f.type}</td>
                                <td>{f.amount}</td>
                                <td>
                                    <span className={`status-badge ${f.status.toLowerCase()}`}>
                                        {f.status}
                                    </span>
                                </td>
                                <td>{f.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
