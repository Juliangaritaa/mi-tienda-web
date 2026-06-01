import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/use-login";

export default function LoginPage() {
  const { login, loading, } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await login(
        username,
        password
      );

      console.log(
        "Usuario autenticado"
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      "
    >
      <Card>
        <CardHeader>
          <CardTitle>
            Iniciar sesión
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={
              handleSubmit
            }
          >
            <Input
              placeholder="Usuario"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <Button
              disabled={loading}
            >
              {loading
                ? "Ingresando..."
                : "Ingresar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}