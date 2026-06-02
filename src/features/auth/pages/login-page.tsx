import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLogin } from "../hooks/use-login";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, loading, } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      navigate("/", { replace: true });

    } catch (error) {
      setError(
        "Usuario o contraseña incorrectos"
      );
    }
  }

  return (
    <div className="h-screen grid place-items-center">
    <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            Iniciar sesión
          </CardTitle>
          <CardDescription>
           Ingresa tus credenciales para iniciar sesión.
          </CardDescription>
          <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={
              handleSubmit
            }
          >
          <div className="flex flex-col gap-6 ">
            <div className="grid gap-2">
              <Label htmlFor="email">Usuario</Label>

              <Input
                placeholder="Usuario"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Password</Label>
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
              />
            </div>
            
            <CardFooter className="flex-col gap-2">
              <Button
                className="w-full"
                disabled={loading}
              >
                {loading
                  ? "Ingresando..."
                  : "Ingresar"}
              </Button>
            </CardFooter>
          </div>

          </form>
        </CardContent>
    </Card>
    </div>
  );
}