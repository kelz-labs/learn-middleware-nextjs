import { NextResponse } from "next/server";

/**
 * Middleware
 *
 * Middleware dijalankan di setiap request, tidak peduli halaman yang diakses ada atau tidak.
 * Responsenya dijalankan setelah middleware.
 */

/*
export const middleware = (request: any) => {
  // biar tereksekusi sampai subpathnya juga, kita bisa tambahkan startsWith
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return console.log("Dashboard bro");
  }
};
*/

/*
1. redirect
export const middleware = (request: any) => {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // redirect hanya bisa pakai absolute URL
    return NextResponse.redirect(String(new URL("/admin", request.url)));
  }

  return NextResponse.next();
};
*/

// 2. rewrite
export const middleware = (request: any) => {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // rewrite, cuma ngubah isinya doang, tapi ga ngeredirect
    return NextResponse.rewrite(String(new URL("/admin", request.url)));
  }

  return NextResponse.next();
};

/*
3. cookies
export const middleware = (request: any) => {
  const response = NextResponse.next();

  response.cookies.set("access_token", "asdasddfb12323423", {
    // jika pakai httpOnly, maka access token tidak bisa diakses javascript
    httpOnly: true,
  });

  // delete cookies
  // response.cookies.delete("access_token");
  // response.cookies.clear();

  // console.log(response.cookies.get("access_token"));

  // kasih responsenya ke client/browser dengan me-return nya
  return response;
};
*/

/*
4. headers
export const middleware = (request: any) => {
  const response = NextResponse.next();

  response.headers.set("Content-Type", "text/html");

  return response;
};
*/

/*
export const config = {
  matcher: ["/dashboard"],
};
*/
