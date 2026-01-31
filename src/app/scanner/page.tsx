import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ScannerPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Modo escáner</h1>
        <p className="mt-2 text-muted-foreground">
          Usa la cámara para validar QR de asistentes en el ingreso.
        </p>
      </section>

      <Card className="border-muted/60 bg-white/90">
        <CardHeader>
          <CardTitle>Cámara</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed bg-muted/40 text-sm text-muted-foreground">
            Vista de cámara (pendiente de integrar QR)
          </div>
        </CardContent>
      </Card>

      <Card className="border-muted/60 bg-white/90">
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
