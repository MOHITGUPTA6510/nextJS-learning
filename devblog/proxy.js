import { NextResponse } from "next/server";

export async function  proxy(request) {
    const session = request.cookies.get("session");

    if(!session){
        return NextResponse.redirect(
            new URL("/cookie-test" , request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher : ["/dashboard/:path*"],
};