import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Panel administrativo</h1>
        <p className="text-muted-foreground">
          Supervisión general de eventos, usuarios y facultades.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Facultades</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">8</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Usuarios registrados</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">1520</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Eventos activos</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">24</CardContent>
        </Card>
      </div>
    </div>
  );
}
