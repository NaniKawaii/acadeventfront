import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchJson } from "@/lib/utils";

type Speaker = {
  id: string;
  fullName: string;
};

type EventDetail = {
  id: string;
  title: string;
  description: string;
  modality: string;
  location: string;
  capacity: number;
  requirements: string | null;
  startAt: string;
  endAt: string;
  facultyId: string | null;
  speakers: Speaker[];
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

function formatTime(value?: string | null) {
  if (!value) {
    return "—";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "—";
  }
  return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

async function getEvent(id: string) {
  try {
    return await fetchJson<EventDetail>(`/events/${id}`);
  } catch {
    return null;
  }
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const eventDetail = await getEvent(params.id);
  if (!eventDetail) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border bg-card p-8 shadow-sm">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Evento no encontrado</h1>
            <p className="text-muted-foreground">
              No se pudo obtener la información del evento.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/events">Volver al catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }
  const available = eventDetail.capacity;
  const timeRange = `${formatTime(eventDetail.startAt)} - ${formatTime(eventDetail.endAt)}`;
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border bg-card p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-3">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              {eventDetail.modality}
            </Badge>
            <h1 className="text-3xl font-semibold">{eventDetail.title}</h1>
            <p className="text-muted-foreground">{eventDetail.description}</p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>Facultad: {eventDetail.facultyId ?? "—"}</span>
              <span>Fecha: {formatDate(eventDetail.startAt)}</span>
              <span>Horario: {timeRange}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/auth/login">Inscribirme</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/events">Volver al catálogo</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2 border-muted/60 bg-white/90">
          <CardHeader>
            <CardTitle>Información general</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex flex-wrap justify-between gap-2 rounded-lg border bg-muted/30 px-3 py-2">
              <span>Ubicación</span>
              <span className="font-medium text-foreground">{eventDetail.location}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 rounded-lg border bg-muted/30 px-3 py-2">
              <span>Requisitos</span>
              <span className="font-medium text-foreground">
                {eventDetail.requirements ?? "—"}
              </span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 rounded-lg border bg-muted/30 px-3 py-2">
              <span>Modalidad</span>
              <span className="font-medium text-foreground">{eventDetail.modality}</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-muted/60 bg-white/90">
          <CardHeader>
            <CardTitle>Estado de cupos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="rounded-lg border bg-muted/30 px-3 py-2">
              Capacidad total: {eventDetail.capacity}
            </div>
            <div className="rounded-lg border bg-primary/10 px-3 py-4 text-center text-base font-semibold text-foreground">
              Disponibles: {available}
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link href="/auth/login">Gestionar inscripción</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-muted/60 bg-white/90">
        <CardHeader>
          <CardTitle>Ponentes</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
          {eventDetail.speakers.length === 0 ? (
            <div className="rounded-lg border bg-muted/30 px-3 py-3">
              Sin ponentes asignados.
            </div>
          ) : (
            eventDetail.speakers.map((speaker) => (
              <div key={speaker.id} className="rounded-lg border bg-muted/30 px-3 py-3">
                {speaker.fullName}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
