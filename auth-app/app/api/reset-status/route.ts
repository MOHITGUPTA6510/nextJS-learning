import { db } from "@/lib/db";
import crypto from "crypto";

export async function GET(request: Request) {
    const cookieHeader = request.headers.get("cookie");

    if (!cookieHeader) {
        return Response.json(
            { verified: false },
            { status: 401 }
        );
    }

    const cookies = Object.fromEntries(
        cookieHeader.split("; ").map(cookie => cookie.split("="))
    );

    const resetToken = cookies.reset_token;

    if (!resetToken) {
        return Response.json(
            { verified: false },
            { status: 401 }
        );
    }

    const resetTokenHash = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    const result = await db.query(
        `SELECT id
         FROM password_reset_otps
         WHERE reset_token_hash = $1
         AND used = TRUE
         AND expires_at > NOW()
         LIMIT 1`,
        [resetTokenHash]
    );

    if (result.rows.length === 0) {
        return Response.json(
            { verified: false },
            { status: 401 }
        );
    }

    return Response.json({
        verified: true,
    });
}