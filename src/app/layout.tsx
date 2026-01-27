import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AcadEvent",
  description: "Plataforma para gestionar eventos académicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground">
          <header className="border-b">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
              <Link href="/" className="text-lg font-semibold">
                AcadEvent
              </Link>
              <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <Link href="/events">Eventos</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/organizer/dashboard">Organizador</Link>
                <Link href="/admin/dashboard">Admin</Link>
                <Link href="/scanner">Scanner</Link>
                <Link href="/notifications">Notificaciones</Link>
              </nav>
              <div className="flex items-center gap-3">
                <Link href="/auth/login" className="text-sm font-medium">
                  Iniciar sesión
                </Link>
                <Link
                  href="/auth/register"
                  className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
