import { abortOnSynchronousPlatformIOAccess } from "next/dist/server/app-render/dynamic-rendering";
import { cookies } from "next/headers";

async function setSession() {
    "use server";

    const cookieStore = await cookies();

    cookieStore.set("session" , "abc123");
    
}

async function logout() {
    "use server";

    const cookieStore = await cookies();

    cookieStore.delete("session");

}

export default async function CookiesTest() {
    
    const cookieStore = await cookies();
    const session = cookieStore.get('session');

    return(
        <div>
            <h1>Cookie test </h1>
            <p>
                Session : {session?.value || "no Cookie"}
            </p>

            <form action={setSession}>
                <button>
                    login
                </button>
            </form>
            <form action={logout}>
                <button>
                    logout
                </button>
            </form>
        </div>
    );
}