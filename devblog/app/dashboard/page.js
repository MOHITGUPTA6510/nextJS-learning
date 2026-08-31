import { cookies} from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    
    const cookieStore = await cookies();

    const session = cookieStore.get("session");

    if (!session){
        redirect("/cookie-test");
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <p>welcome ! u are logged in .</p>
        </div>
    );
}