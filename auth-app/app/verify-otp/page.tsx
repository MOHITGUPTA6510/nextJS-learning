"use client";

import { useState } from "react";

export default function VerifyOTP() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    async function verifyOTP() {
        const response = await fetch("/api/verify-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                otp,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "/forgot-password";
        } else {
            setMessage(data.error);
        }
    }

    return (
        <div>
            <h1>Verify OTP</h1>

            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />

            <button onClick={verifyOTP}>
                Verify OTP
            </button>

            <p>{message}</p>
        </div>
    );
}