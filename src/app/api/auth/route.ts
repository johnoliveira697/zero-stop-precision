import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  const clientId = process.env.GITHUB_CLIENT_ID;

  // state aleatório anti-CSRF: garante que o /api/callback só aceita
  // respostas que vieram de um login iniciado por nós mesmos.
  const state = crypto.randomBytes(16).toString('hex');

  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&state=${state}`;

  const response = NextResponse.redirect(redirectUri);
  response.cookies.set('decap_oauth_state', state, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 600, // 10 minutos é mais que suficiente para completar o login
    path: '/',
  });

  return response;
}
