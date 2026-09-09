import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const body = await request.json();

    const { name, email, password } = body;

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await db.query(
        `INSERT INTO users (name, email, password_hash)
         VALUES ($1, $2, $3)
         RETURNING id, name, email`,
        [name, email, passwordHash]
    );

    return Response.json(result.rows[0]);
}