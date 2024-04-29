// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { apiAuthPrefix, authRoutes, dashboardAuthPrefix, fileRoutePrefix, protectedRoute, publicRoutes } from './route';
// import { verifyJwt } from '@/lib/jwt-util';
 
// // This function can be marked `async` if using `await` inside
// export async function middleware(req: NextRequest) {
//     const nextUrl = req.url;
//     const headers = req.headers;
//     const cookies = req.cookies;
  
//    const pathname = req.nextUrl.pathname;
//    const host =req.nextUrl.hostname
//    const origin =req.nextUrl.origin
//    console.log("ROUTE PATH: ",pathname)

//     const isAuthRoute = authRoutes.includes(pathname);

//     const isPublicRoute = publicRoutes.includes(pathname);
//     // const isProtectedRoute = protectedRoute.includes(pathname);
//     const isDashboardRoute = pathname.startsWith(dashboardAuthPrefix);
//     const isFileRoute = pathname.startsWith(fileRoutePrefix);
//     const token = cookies.get('session_token')?.value || "";

//     const isValidToken = await verifyJwt(token);
//     if(isDashboardRoute || isFileRoute){
     
//             if(!isValidToken){
//                 return Response.redirect(new URL("/auth/login",nextUrl))

//             }
      
//     }
//     // if(isApiAuthRoute){
//     //     return null;
//     // }
//     if(isPublicRoute){
//         console.log("ROUTE PUBLIC")
//         // return null
//     }
//     if(isAuthRoute){
//        if(isValidToken){
//         return Response.redirect(new URL("/dashboard",nextUrl))

//        }
//         // return null;
//     }
  
//     return null;
// //   return NextResponse.redirect(new URL('/home', req.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: [
//           // Exclude files with a "." followed by an extension, which are typically static files.
//       // Exclude files in the _next directory, which are Next.js internals.
//       "/((?!.+\\.[\\w]+$|_next).*)",
  
//       // Re-include any files in the api or trpc folders that might have an extension
//       "/(api|trpc)(.*)"
//     ],
//   }