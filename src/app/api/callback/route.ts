import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return new NextResponse('No code provided', { status: 400 });
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
          if (window.opener) {
            window.opener.postMessage(
              'authorization:github:success:{"token":"${token}", "provider":"github"}',
              '*'
            );
          }
          window.close();
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
