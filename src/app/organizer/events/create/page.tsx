import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function OrganizerCreateEventPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Crear evento</h1>
        <p className="text-muted-foreground">
          Registra un evento académico con su información principal.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datos del evento</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <div className="text-sm font-medium">Título</div>
            <Input placeholder="Nombre del evento" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="text-sm font-medium">Descripción</div>
            <Textarea placeholder="Describe el evento y sus objetivos" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Modalidad</div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona modalidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="presencial">Presencial</SelectItem>
                <SelectItem value="virtual">Virtual</SelectItem>
                <SelectItem value="hibrido">Híbrido</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Categoría</div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="congreso">Congreso</SelectItem>
                <SelectItem value="seminario">Seminario</SelectItem>
                <SelectItem value="taller">Taller</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Fecha inicio</div>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Fecha fin</div>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Hora inicio</div>
            <Input type="time" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Hora fin</div>
            <Input type="time" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Ubicación</div>
            <Input placeholder="Auditorio o enlace virtual" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Capacidad</div>
            <Input type="number" placeholder="0" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="text-sm font-medium">Requisitos</div>
            <Textarea placeholder="Requisitos para participar" />
          </div>
          <div className="md:col-span-2">
            <Button className="w-full">Guardar evento</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
