import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-6 rounded-2xl border bg-card p-10 shadow-sm md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <Badge>Plataforma Académica</Badge>
          <h1 className="text-4xl font-semibold tracking-tight">
            AcadEvent centraliza la gestión de eventos académicos
          </h1>
          <p className="text-muted-foreground">
            Publica eventos, gestiona inscripciones, controla asistencia y emite certificados.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/events">Ver eventos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/auth/login">Iniciar sesión</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Eventos activos</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">12</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certificados emitidos</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">320</CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Catálogo de eventos",
            description: "Explora eventos por fecha, modalidad y facultad."
          },
          {
            title: "Inscripciones rápidas",
            description: "Asegura tu cupo y gestiona tus eventos inscritos."
          },
          {
            title: "Certificados verificables",
            description: "Emite y valida certificados con código único."
          }
        ].map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{item.description}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
