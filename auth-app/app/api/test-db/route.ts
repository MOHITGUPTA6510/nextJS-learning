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

    try{

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return Response.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        if(password.length <8){
            return Response.json(
                {error : "Password must be at least 8 charecters "},
                {status : 400}
            );
        }
        
        const existingUser = await db.query(
            "SELECT id FROM users WHERE email = $1",
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
    }catch(error){
        console.error(error);
        return Response.json(
            {error : "Something went wrong"},
            {status : 500}
        );
    }
}