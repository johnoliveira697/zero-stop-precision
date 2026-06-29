import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const savedState = request.cookies.get('decap_oauth_state')?.value;

  if (!code) {
    return new NextResponse('No code provided', { status: 400 });
  }

  if (!state || !savedState || state !== savedState) {
    return new NextResponse('Invalid or missing state. Possible CSRF attempt.', { status: 401 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();
    const token = data.access_token;

    if (!token) {
      return new NextResponse('Authentication failed. Check your GitHub Client ID and Secret.', { status: 401 });
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Auth Success</title>
      </head>
      <body>
        <p>Autenticação com sucesso! Conectando ao painel...</p>
        <script>
          (function() {
            function receiveMessage(e) {
              if (e.data === "authorizing:github") {
                window.opener.postMessage(
                  'authorization:github:success:{"token":"${token}","provider":"github"}',
                  e.origin
                );
              }
            }
            window.addEventListener("message", receiveMessage, false);
            window.opener.postMessage("authorizing:github", "*");
          })();
        </script>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });

  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
