import { db } from "@/lib/db";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { transporter } from "@/lib/email";

export async function POST(request: Request) {
    const body = await request.json();

    const { email } = body;

    if (!email) {
        return Response.json(
            { error: "Email is required" },
            { status: 400 }
        );
    }

    const result = await db.query(
        "SELECT id FROM users WHERE email = $1",
        [email]
    );

    if (result.rows.length === 0) {
        return Response.json(
            { error: "Account not found" },
            { status: 404 }
        );
    }

    const user = result.rows[0];

    const otp = crypto.randomInt(100000, 1000000).toString();

    const otpHash = await bcrypt.hash(otp, 10);

    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);

    await db.query(
        `INSERT INTO password_reset_otps
        (user_id, otp_hash, expires_at)
        VALUES ($1, $2, $3)`,
        [user.id, otpHash, expiresAt]
    );

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset OTP",
        text: `Your password reset OTP is: ${otp}. It will expire in 10 minutes.`,
    });

    return Response.json({
        message: "OTP generated successfully",
    });
}