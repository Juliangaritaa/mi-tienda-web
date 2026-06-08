import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Task } from "../types/task.type.ts";
import { CaseUpper } from "lucide-react";

interface TaskProps {
  tasks: Task[];
  loading: boolean;
}

export default function TaskCard({ tasks, loading }: TaskProps) {
  if (loading) {
    return <p>Cargando tareas...</p>;
  }

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-4">
      {tasks.map((task) => (
        <Card key={task.id} size="sm" className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{task.description}</p>
            <div className="flex justify-between text-sm">
              <p className="text-sm text-muted-foreground">Estado: </p>
              <span>{task.status}</span>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-sm text-muted-foreground">Creado: </p>
              <span>{new Date(task.created_at).toLocaleDateString("es-CO")}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Ver Detalles
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
