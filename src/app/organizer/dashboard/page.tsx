import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrganizerDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border bg-card p-8 shadow-sm">
        <div>
          <h1 className="text-3xl font-semibold">Panel del organizador</h1>
          <p className="text-muted-foreground">
            Crea y gestiona tus eventos, controla inscripciones y asistencia.
          </p>
        </div>
        <Button asChild>
          <Link href="/organizer/events/create">Crear evento</Link>
        </Button>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Eventos publicados", value: "3", detail: "Activos" },
          { title: "Inscripciones totales", value: "520", detail: "Confirmadas" },
          { title: "Asistencia registrada", value: "430", detail: "Validada" },
        ].map((item) => (
          <Card key={item.title} className="border-muted/60 bg-white/90">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-3xl font-semibold">{item.value}</span>
              <span className="text-xs text-muted-foreground">{item.detail}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
