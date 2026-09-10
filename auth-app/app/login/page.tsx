"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message , setMessage] = useState("");
    const router = useRouter();

    async function login(){
        const response = await fetch("/api/login",{
            method : "POST",
            
            headers: {
                "Content-Type": "application/json",
            },
            
            body: JSON.stringify({
                email,
                password,
            }),

        });

        const data = await response.json();

        if (response.ok) {
            router.push("/profile");
        } else {
            setMessage(data.error);
    }

    }

    function redirect(){
        router.push("/test-register")
    }

    return (
        <div>
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

            <button onClick={login}>
                Login
            </button>

            <button onClick={redirect}>
                Register
            </button>
            <p>{message}</p>
        </div>
    );
}