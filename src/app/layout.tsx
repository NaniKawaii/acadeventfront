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
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-foreground">
          <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-3">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                  AcadEvent
                </Link>
                <span className="hidden rounded-full border px-2 py-1 text-xs text-muted-foreground md:inline-flex">
                  Gestión académica institucional
                </span>
              </div>
              <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {[
                  { href: "/events", label: "Eventos" },
                  { href: "/dashboard", label: "Dashboard" },
                  { href: "/organizer/dashboard", label: "Organizador" },
                  { href: "/admin/dashboard", label: "Admin" },
                  { href: "/scanner", label: "Scanner" },
                  { href: "/notifications", label: "Notificaciones" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-1.5 transition hover:bg-muted/70 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Link href="/auth/login" className="text-sm font-medium">
                  Iniciar sesión
                </Link>
                <Link
                  href="/auth/register"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
