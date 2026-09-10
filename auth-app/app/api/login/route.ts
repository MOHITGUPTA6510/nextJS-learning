import { db } from "@/lib/db"
import bcrypt from "bcrypt";
import crypto from "crypto";

export async function POST(request: Request){
    const body = await request.json();

    const {email, password} = body;

    const result  = await db.query(
        "SELECT id, name, email, password_hash FROM users WHERE email = $1",
        [email]
    );

    if(result.rows.length === 0){
        return Response.json(
            {error : "Invalid email or Password"},
            {status : 401}
        );
    }

    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(
        password,
        user.password_hash
    );

    if(!passwordMatch){
        return Response.json(
            {error:"Invalid email or password "},
            {status : 401}
        );
    }

    const sessionId = crypto.randomBytes(32).toString("hex");

    const expiresAt = new Date();

    expiresAt.setDate(expiresAt.getDate() + 7);

    await db.query(
        `INSERT INTO sessions (id, user_id, expires_at)
        VALUES ($1, $2, $3)`,
        [sessionId, user.id, expiresAt]
    );

    const response =  Response.json({
        message : "Login Successful",
        user : {
            id : user.id,
            name : user.name,
            email : user.email,
        },
    });

    response.headers.set(
        "Set-Cookie",
        `session_id=${sessionId}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`
    );
    return response;
}
