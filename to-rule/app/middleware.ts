import { NextRequest } from "next/server";

let locales = ['en-US', 'fr-FR']

function getLocale(request : NextRequest) { 
    const preferredLocale = request.cookies.get('preferred-locale');

    if (preferredLocale)
        return (preferredLocale);
    return ('en-UK');
 }

export function localizer(request : NextRequest) {

    console.log("Pomme de terre")

    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some( (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) 
        return ;
    
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: [
      // Skip all internal paths (_next)
      '/((?!_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }