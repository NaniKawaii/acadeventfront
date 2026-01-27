import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrganizerDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Panel del organizador</h1>
          <p className="text-muted-foreground">
            Crea y gestiona tus eventos, controla inscripciones y asistencia.
          </p>
        </div>
        <Button asChild>
          <Link href="/organizer/events/create">Crear evento</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Eventos publicados</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">3</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inscripciones totales</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">520</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Asistencia registrada</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">430</CardContent>
        </Card>
      </div>
    </div>
  );
}
