import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { apiAuthPrefix, authRoutes, publicRoutes } from './route';
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    const nextUrl = req.url;
    const headers = req.headers;
    const cookies = req.cookies;
  
   const pathname = req.nextUrl.pathname;
   const host =req.nextUrl.hostname
   const origin =req.nextUrl.origin
   console.log("ROUTE PATH: ",pathname)

//    console.log(pathname)
//    console.log(host)
//    console.log(origin)
//    console.log(cookies)
//    console.log(headers)

    // const isLoggedIn = !!req.auth;
    const isApiAuthRoute = pathname.startsWith(apiAuthPrefix)

    const isPublicRoute = publicRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);

    // if(isApiAuthRoute){
    //     return null;
    // }
    if(isPublicRoute){
        console.log("ROUTE PUBLIC")
        // return null
    }
    if(isApiAuthRoute){
        console.log("ROUTE AUTH")
        // return null;
    }
  
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