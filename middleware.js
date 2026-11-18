function timingSafeEqual(a, b) {
  const enc = new TextEncoder();
  const aBytes = enc.encode(a);
  const bBytes = enc.encode(b);
  const maxLen = Math.max(aBytes.length, bBytes.length);
  let diff = aBytes.length ^ bBytes.length;
  for (let i = 0; i < maxLen; i++) {
    diff |= (aBytes[i] ?? 0) ^ (bBytes[i] ?? 0);
  }
  return diff === 0;
}

export default function middleware(request) {
  const expectedUser = process.env.APP_AUTH_USER || 'perkin';
  const expectedPass = process.env.APP_AUTH_PASSWORD;

  // Fail closed: block all access until APP_AUTH_PASSWORD is configured in Vercel
  if (!expectedPass) {
    return new Response(
      'Internal system locked. Configure APP_AUTH_PASSWORD in environment variables to enable access.',
      {
        status: 503,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-store',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      }
    );
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Basic ')) {
    try {
      const decoded = atob(authHeader.slice(6).trim());
      const sep = decoded.indexOf(':');
      if (sep !== -1) {
        const user = decoded.slice(0, sep);
        const pass = decoded.slice(sep + 1);
        if (timingSafeEqual(user, expectedUser) && timingSafeEqual(pass, expectedPass)) {
          return new Response(null, {
            headers: {
              'x-middleware-next': '1',
              'X-Robots-Tag': 'noindex, nofollow',
            },
          });
        }
      }
    } catch {
      // Invalid base64 header -> fall through to 401
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Perkin Vehicle Cost Internal"',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

export const config = {
  matcher: ['/:path*'],
};