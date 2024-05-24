import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const cookie = cookies().get('Authorization')

    if(!cookie)
        return NextResponse.redirect(new URL("/auth/signin", request.url))

    try {

        const res = await fetch('https://jb-silicon-tokenprovider.azurewebsites.net/api/token/verify?code=PuTJh0CAVpXNX3G9gR3n_6dbIuokoKGjfx9oOKRNQNFRAzFuKxmESA%3D%3D', {
            method: 'post',
            headers: {
                "Authorization": `bearer ${cookie.value}`,
            }
        })

        if (res.status === 200)
            NextResponse.redirect(request.url)
        else
            return NextResponse.redirect(new URL("/auth/signin", request.url))

    }
    catch(error) {
        return NextResponse.redirect(new URL("/auth/signin", request.url))
    }

}

export const config = {
    matcher: ["/account/:path*", "/portfolio/:path*"]
}