import { cookies } from "next/headers";

export default async function CookiesTest() {
    
    const cookieStore = await cookies();
    const session = cookieStore.get('session');

    return(
        <div>
            <h1>Cookie test </h1>
            <p>
                Session : {session?.value || "no Cookie"}
            </p>
        </div>
    );
}