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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const careers = [
  { id: "c1", name: "Ingeniería de Sistemas", faculty: "Ingeniería" },
  { id: "c2", name: "Biología", faculty: "Ciencias" },
  { id: "c3", name: "Administración", faculty: "Economía" },
];

export default function AdminCareersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Carreras</h1>
        <p className="text-muted-foreground">
          Gestiona las carreras y su relación con facultades.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nueva carrera</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-[1.2fr_1fr_auto]">
          <Input placeholder="Nombre de la carrera" />
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
                <TableHead>Carrera</TableHead>
                <TableHead>Facultad</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {careers.map((career) => (
                <TableRow key={career.id}>
                  <TableCell>{career.id}</TableCell>
                  <TableCell>{career.name}</TableCell>
                  <TableCell>{career.faculty}</TableCell>
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
