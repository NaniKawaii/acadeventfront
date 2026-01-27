import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScannerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Modo escáner</h1>
        <p className="text-muted-foreground">
          Usa la cámara para validar QR de asistentes.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cámara</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-center justify-center rounded-lg border bg-muted text-sm text-muted-foreground">
            Vista de cámara (pendiente de integrar QR)
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resultado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <div>Evento: —</div>
          <div>Asistente: —</div>
          <div>Estado: —</div>
        </CardContent>
      </Card>
    </div>
  );
}
