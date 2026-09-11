import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import crypto from "crypto";

export async function POST(request: Request) {
    const body = await request.json();

    const { password } = body;

    if (!password) {
        return Response.json(
            { error: "Password is required" },
            { status: 400 }
        );
    }

    if (password.length < 8) {
        return Response.json(
            { error: "Password must be at least 8 characters" },
            { status: 400 }
        );
    }

    const cookieHeader = request.headers.get("cookie");

    if (!cookieHeader) {
        return Response.json(
            { error: "Reset session not found" },
            { status: 401 }
        );
    }

    const cookies = Object.fromEntries(
        cookieHeader.split("; ").map(cookie => cookie.split("="))
    );

    const resetToken = cookies.reset_token;

    if (!resetToken) {
        return Response.json(
            { error: "Reset session not found" },
            { status: 401 }
        );
    }

    const resetTokenHash = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    const result = await db.query(
        `SELECT id, user_id
         FROM password_reset_otps
         WHERE reset_token_hash = $1
         AND used = TRUE
         AND expires_at > NOW()
         ORDER BY id DESC
         LIMIT 1`,
        [resetTokenHash]
    );

    if (result.rows.length === 0) {
        return Response.json(
            { error: "Invalid or expired reset session" },
            { status: 401 }
        );
    }

    const resetRequest = result.rows[0];

    const passwordHash = await bcrypt.hash(password, 10);

    await db.query(
        `UPDATE users
         SET password_hash = $1
         WHERE id = $2`,
        [passwordHash, resetRequest.user_id]
    );

    await db.query(
        `UPDATE password_reset_otps
         SET reset_token_hash = NULL
         WHERE id = $1`,
        [resetRequest.id]
    );

    const response = Response.json({
        message: "Password reset successful",
    });

    response.headers.set(
        "Set-Cookie",
        "reset_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax"
    );

    return response;
}