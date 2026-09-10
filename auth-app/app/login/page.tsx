"use client";
import { useState } from "react";

export default function (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message , setMessage] = useState("");

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

        if(response.ok){
            setMessage("Registraton is successfull");
        } else {
            setMessage(data.error);
            
        }

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
            <p>{message}</p>
        </div>
    );
}