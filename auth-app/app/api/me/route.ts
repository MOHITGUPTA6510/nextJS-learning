import { db } from "@/lib/db";

export async function GET(request: Request) {
    const cookieHeader = request.headers.get("cookie");

    if (!cookieHeader) {
        return Response.json(
            { error: "Not authenticated" },
            { status: 401 }
        );
    }

    const cookies = Object.fromEntries(
        cookieHeader.split("; ").map(cookie => cookie.split("="))
    );

    const sessionId = cookies.session_id;

    if (!sessionId) {
        return Response.json(
            { error: "Not authenticated" },
            { status: 401 }
        );
    }

    const result = await db.query(
        `SELECT users.id, users.name, users.email
         FROM sessions
         JOIN users ON sessions.user_id = users.id
         WHERE sessions.id = $1
         AND sessions.expires_at > NOW()`,
        [sessionId]
    );

    if (result.rows.length === 0) {
        return Response.json(
            { error: "Session expired or invalid" },
            { status: 401 }
        );
    }

    return Response.json({
        user: result.rows[0],
    });
}