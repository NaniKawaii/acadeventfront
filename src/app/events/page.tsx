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
    <div className="space-y-10">
      <section className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border bg-card p-8 shadow-sm">
        <div className="space-y-2">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            Catálogo institucional
          </Badge>
          <h1 className="text-3xl font-semibold">Eventos académicos disponibles</h1>
          <p className="text-muted-foreground">
            Filtra por fecha, facultad, modalidad y encuentra experiencias formativas.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/auth/login">Iniciar sesión</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard">Mis eventos</Link>
          </Button>
        </div>
      </section>

      <Card className="border-muted/60 bg-white/80">
        <CardHeader>
          <CardTitle>Filtros rápidos</CardTitle>
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
        <div className="rounded-2xl border bg-white/80 p-8 text-center text-sm text-muted-foreground">
          <div className="text-base font-semibold text-foreground">
            Aún no hay eventos publicados.
          </div>
          <p className="mt-2">
            Pronto aparecerán las nuevas charlas y talleres de tu facultad.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => {
            const available = event.capacity;
            return (
              <Card
                key={event.id}
                className="flex flex-col border-muted/60 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="bg-muted/60">
                      {event.modality}
                    </Badge>
                    <span>{formatDate(event.startAt)}</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div>Facultad: {event.facultyId ?? "—"}</div>
                  <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-3 py-2 text-sm">
                    <span>Cupos disponibles</span>
                    <span className="font-semibold text-foreground">{available}</span>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" asChild className="w-full">
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
