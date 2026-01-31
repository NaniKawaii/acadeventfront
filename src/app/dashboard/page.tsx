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
      <section className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border bg-card p-8 shadow-sm">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard del asistente</h1>
          <p className="text-muted-foreground">
            Revisa tus inscripciones, certificados y eventos próximos.
          </p>
        </div>
        <Button asChild>
          <Link href="/events">Explorar eventos</Link>
        </Button>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Eventos inscritos", value: "2", detail: "Este semestre" },
          { title: "Certificados emitidos", value: "2", detail: "Verificados" },
          {
            title: "Próximo evento",
            value: "10 Mar",
            detail: "Congreso de Innovación Educativa",
          },
        ].map((item) => (
          <Card key={item.title} className="border-muted/60 bg-white/90">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-semibold">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.detail}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-muted/60 bg-white/90">
          <CardHeader>
            <CardTitle>Mis inscripciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {registrations.map((registration) => (
              <div
                key={registration.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-muted/30 px-4 py-3"
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
        <Card className="border-muted/60 bg-white/90">
          <CardHeader>
            <CardTitle>Mis certificados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-muted/30 px-4 py-3"
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
