"use client";

import { useState } from "react";

export default function TestRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message , setMessage] = useState("");

    async function register() {

        const response = await fetch("/api/register", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await response.json();

        if(response.ok){
            setMessage("Registraton is successfull");
        } else {
            setMessage(data.error);
            
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={register}>
                Register
            </button>
            <p>{message}</p>
        </div>
    );
}