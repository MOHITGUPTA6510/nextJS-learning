"use client";

import { useEffect, useState } from "react";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkResetStatus() {
            const response = await fetch("/api/reset-status");

            if (response.ok) {
                const data = await response.json();

                if (data.verified) {
                    setOtpVerified(true);
                }
            }

            setLoading(false);
        }

        checkResetStatus();
    }, []);

    async function sendOTP() {
        const response = await fetch("/api/forgot-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = `/verify-otp?email=${encodeURIComponent(email)}`;
        } else {
            setMessage(data.error);
        }
    }

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
            setPassword("");
            setOtpVerified(false);
        } else {
            setMessage(data.error);
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Forgot Password</h1>

            {!otpVerified ? (
                <>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button onClick={sendOTP}>
                        Send OTP
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={resetPassword}>
                        Reset Password
                    </button>
                </>
            )}

            <p>{message}</p>
        </div>
    );
}