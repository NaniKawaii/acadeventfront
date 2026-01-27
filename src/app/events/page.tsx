import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchJson } from "@/lib/utils";

type EventItem = {
  id: string;
  title: string;
  modality: string;
  capacity: number;
  startAt: string;
  facultyId: string | null;
};

function formatDate(value?: string | null) {
  if (!value) {
    return "—";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "—";
  }
  return date.toISOString().slice(0, 10);
}

async function getEvents() {
  try {
    return await fetchJson<EventItem[]>("/events");
  } catch {
    return [];
  }
}

export default async function EventsPage() {
  const events = await getEvents();
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Catálogo de eventos</h1>
          <p className="text-muted-foreground">Explora eventos disponibles y filtra por criterios.</p>
        </div>
        <Button asChild>
          <Link href="/auth/login">Iniciar sesión</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <Input placeholder="Buscar por nombre" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Modalidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PRESENCIAL">Presencial</SelectItem>
              <SelectItem value="VIRTUAL">Virtual</SelectItem>
              <SelectItem value="HIBRIDO">Híbrido</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Facultad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ingenieria">Ingeniería</SelectItem>
              <SelectItem value="ciencias">Ciencias</SelectItem>
              <SelectItem value="economia">Economía</SelectItem>
            </SelectContent>
          </Select>
          <Input type="date" />
        </CardContent>
      </Card>

      {events.length === 0 ? (
        <div className="rounded-lg border p-6 text-sm text-muted-foreground">
          No hay eventos disponibles.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => {
            const available = event.capacity;
            return (
              <Card key={event.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div>Facultad: {event.facultyId ?? "—"}</div>
                  <div>Fecha: {formatDate(event.startAt)}</div>
                  <Badge variant="outline">{event.modality}</Badge>
                  <div className="font-medium text-foreground">
                    Cupos disponibles: {available}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" asChild>
                    <Link href={`/events/${event.id}`}>Ver detalle</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
