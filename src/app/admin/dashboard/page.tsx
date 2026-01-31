import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Panel administrativo</h1>
        <p className="mt-2 text-muted-foreground">
          Supervisión general de eventos, usuarios, facultades y métricas institucionales.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Facultades", value: "8", detail: "Configuradas" },
          { title: "Usuarios registrados", value: "1,520", detail: "Activos" },
          { title: "Eventos activos", value: "24", detail: "En curso" },
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
