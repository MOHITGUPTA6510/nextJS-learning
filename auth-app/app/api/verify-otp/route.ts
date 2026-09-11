import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import crypto from "crypto";

export async function POST(request: Request) {
    const body = await request.json();

    const { email, otp } = body;

    if (!email || !otp) {
        return Response.json(
            { error: "Email and OTP are required" },
            { status: 400 }
        );
    }

    const userResult = await db.query(
        "SELECT id FROM users WHERE email = $1",
        [email]
    );

    if (userResult.rows.length === 0) {
        return Response.json(
            { error: "Invalid OTP" },
            { status: 401 }
        );
    }

    const userId = userResult.rows[0].id;

    const otpResult = await db.query(
        `SELECT id, otp_hash
         FROM password_reset_otps
         WHERE user_id = $1
         AND used = FALSE
         AND expires_at > NOW()
         ORDER BY id DESC
         LIMIT 1`,
        [userId]
    );

    if (otpResult.rows.length === 0) {
        return Response.json(
            { error: "OTP expired or invalid" },
            { status: 401 }
        );
    }

    const resetOTP = otpResult.rows[0];

    const otpMatch = await bcrypt.compare(
        otp,
        resetOTP.otp_hash
    );

    if (!otpMatch) {
        return Response.json(
            { error: "Invalid OTP" },
            { status: 401 }
        );
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const resetTokenHash = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    await db.query(
        `UPDATE password_reset_otps
         SET used = TRUE,
             reset_token_hash = $1
         WHERE id = $2`,
        [resetTokenHash, resetOTP.id]
    );

    const response = Response.json({
        message: "OTP verified successfully",
    });

    response.headers.set(
        "Set-Cookie",
        `reset_token=${resetToken}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax`
    );

    return response;
}