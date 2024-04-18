import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    const nextUrl = req.url;
    const headers = req.headers;
    const cookies = req.cookies;
    console.log(nextUrl,"url---")
    // console.log("ROUTE: ", req.nextUrl.pathname);
   const pathname = req.nextUrl.pathname;
   const host =req.nextUrl.hostname
   const origin =req.nextUrl.origin
   console.log(pathname)
   console.log(host)
   console.log(origin)
   console.log(cookies)
   console.log(headers)

    // const isLoggedIn = !!req.auth;
    // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)

    // const isPublicRoute = publicRoutes.includes(nextUrl);
    // const isAuthRoute = authRoutes.includes(nextUrl);

    // if(isApiAuthRoute){
    //     return null;
    // }
    // if(isAuthRoute){
    //     if(isLoggedIn){
    //         return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl));
    //     }
    //     return null;
    // }
    // if(!isLoggedIn && !isPublicRoute){
    //     return Response.redirect(new URL("/auth/login",nextUrl))
    // }
    return null;
//   return NextResponse.redirect(new URL('/home', req.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
          // Exclude files with a "." followed by an extension, which are typically static files.
      // Exclude files in the _next directory, which are Next.js internals.
      "/((?!.+\\.[\\w]+$|_next).*)",
  
      // Re-include any files in the api or trpc folders that might have an extension
      "/(api|trpc)(.*)"
    ],
  }