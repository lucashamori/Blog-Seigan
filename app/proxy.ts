import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Caminhos que queremos proteger
const protectedPaths = ['/studio', '/(admin)']

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Permite o acesso a rotas que não precisam de proteção
  if (!protectedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Verifica autenticação
  const auth = req.cookies.get('admin-auth')?.value
  const password = process.env.ADMIN_PASSWORD

  if (auth === password) {
    return NextResponse.next()
  }

  // Redireciona para a página de login
  const loginUrl = new URL('/admin-login', req.url)
  return NextResponse.redirect(loginUrl)
}
