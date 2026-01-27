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
        <div className="flex flex-wrap items-center justify-between gap-4">
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
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <Badge variant="outline">{eventDetail.modality}</Badge>
          <h1 className="text-3xl font-semibold">{eventDetail.title}</h1>
          <p className="text-muted-foreground">{eventDetail.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/auth/login">Inscribirme</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/events">Volver al catálogo</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Información general</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>Facultad: {eventDetail.facultyId ?? "—"}</div>
            <div>Fecha: {formatDate(eventDetail.startAt)}</div>
            <div>Horario: {timeRange}</div>
            <div>Ubicación: {eventDetail.location}</div>
            <div>Requisitos: {eventDetail.requirements ?? "—"}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cupos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div>Capacidad total: {eventDetail.capacity}</div>
            <div className="text-base font-semibold text-foreground">
              Disponibles: {available}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Speakers</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm text-muted-foreground md:grid-cols-3">
          {eventDetail.speakers.length === 0 ? (
            <div className="rounded-lg border px-3 py-2">Sin speakers asignados.</div>
          ) : (
            eventDetail.speakers.map((speaker) => (
              <div key={speaker.id} className="rounded-lg border px-3 py-2">
                {speaker.fullName}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
