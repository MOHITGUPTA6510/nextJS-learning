"use client";

import { useState } from "react";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function resetPassword() {
        const response = await fetch("/api/reset-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(data.message);
        } else {
            setMessage(data.error);
        }
    }

    return (
        <div>
            <h1>Reset Password</h1>

            <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={resetPassword}>
                Reset Password
            </button>

            <p>{message}</p>
        </div>
    );
}