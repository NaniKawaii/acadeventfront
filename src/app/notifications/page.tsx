import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notifications = [
  {
    id: "n1",
    title: "Recordatorio",
    message: "El evento Congreso de Innovación Educativa inicia mañana.",
    time: "Hace 2 horas",
    status: "Nueva",
  },
  {
    id: "n2",
    title: "Inscripción confirmada",
    message: "Tu registro al Seminario de Investigación fue confirmado.",
    time: "Hace 1 día",
    status: "Leída",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Notificaciones</h1>
        <p className="text-muted-foreground">
          Historial de alertas y mensajes del sistema.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <CardHeader className="flex flex-row items-center justify-between gap-3">
              <CardTitle className="text-base">{notification.title}</CardTitle>
              <Badge variant="outline">{notification.status}</Badge>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div>{notification.message}</div>
              <div className="mt-2 text-xs">{notification.time}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
