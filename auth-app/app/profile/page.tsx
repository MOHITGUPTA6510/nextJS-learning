"use client";

import { useEffect, useState } from "react";

export default function Profile() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUser() {
            const response = await fetch("/api/me");
            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
            } else {
                window.location.href = "/login";
            }

            setLoading(false);
        }

        getUser();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }


    async function logout() {
        const response = await fetch("/api/logout", {
            method: "POST",
        });

        if (response.ok) {
            window.location.href = "/login";
        }
    }

    return (
        <div>
            <h1>Profile Page</h1>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}