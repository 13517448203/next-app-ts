import { NextResponse } from "next/server"
import { type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  console.log('run');
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!request.nextUrl.pathname.startsWith('/admin/login')) {
      if (request.cookies.get('admin-token')) {

      } else {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
    } 
  }
  // return NextRequest.redirect(new URL('/home', request.url))
}
