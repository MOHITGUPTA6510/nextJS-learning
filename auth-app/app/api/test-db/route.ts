import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const body = await request.json();

    const { name, email, password } = body;

    if(!name || !email || !password){
        return Response.json(
            {error : "All field are required"},
            {status : 400}
        );
    }
    
    const existingUser = await db.query(
        "SELECT id FROM user WHERE email = $1",
        [email]
    );
    if(existingUser.rows.length>0){
        return Response.json(
            {error: "Email already registered"},
            {status : 409}
        );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await db.query(
        `INSERT INTO users (name, email, password_hash)
         VALUES ($1, $2, $3)
         RETURNING id, name, email`,
        [name, email, passwordHash]
    );

    return Response.json(result.rows[0]);
}