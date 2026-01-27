import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const registrations = [
  {
    id: "1",
    title: "Congreso de Innovación Educativa",
    date: "2026-03-10",
    status: "Inscrito",
  },
  {
    id: "2",
    title: "Seminario de Investigación",
    date: "2026-03-18",
    status: "Lista de espera",
  },
];

const certificates = [
  { id: "c1", title: "Foro de Emprendimiento", code: "AE-2026-001" },
  { id: "c2", title: "Congreso de Innovación Educativa", code: "AE-2026-002" },
];

export default function AssistantDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard del asistente</h1>
          <p className="text-muted-foreground">
            Revisa tus inscripciones, certificados y eventos próximos.
          </p>
        </div>
        <Button asChild>
          <Link href="/events">Explorar eventos</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Eventos inscritos</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">2</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Certificados emitidos</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">2</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximo evento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Congreso de Innovación Educativa - 10 Mar
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mis inscripciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {registrations.map((registration) => (
              <div
                key={registration.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3"
              >
                <div>
                  <div className="font-medium">{registration.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Fecha: {registration.date}
                  </div>
                </div>
                <Badge variant="outline">{registration.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mis certificados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3"
              >
                <div>
                  <div className="font-medium">{certificate.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Código: {certificate.code}
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/verify">Verificar</Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
