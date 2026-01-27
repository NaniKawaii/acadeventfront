import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const faculties = [
  { id: "f1", name: "Ingeniería" },
  { id: "f2", name: "Ciencias" },
  { id: "f3", name: "Economía" },
];

export default function AdminFacultiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Facultades</h1>
        <p className="text-muted-foreground">
          Administra las facultades disponibles en el sistema.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nueva facultad</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Input placeholder="Nombre de la facultad" className="max-w-sm" />
          <Button>Agregar</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Listado</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faculties.map((faculty) => (
                <TableRow key={faculty.id}>
                  <TableCell>{faculty.id}</TableCell>
                  <TableCell>{faculty.name}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
