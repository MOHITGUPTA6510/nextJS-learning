import { db } from "@/lib/db";

export async function POST(request: Request) {
    const cookieHeader = request.headers.get("cookie");

    if (cookieHeader) {
        const cookies = Object.fromEntries(
            cookieHeader.split("; ").map(cookie => cookie.split("="))
        );

        const sessionId = cookies.session_id;

        if (sessionId) {
            await db.query(
                "DELETE FROM sessions WHERE id = $1",
                [sessionId]
            );
        }
    }

    const response = Response.json({
        message: "Logout successful",
    });

    response.headers.set(
        "Set-Cookie",
        "session_id=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax"
    );

    return response;
}