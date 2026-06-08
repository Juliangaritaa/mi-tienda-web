import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react"
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function UserMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback>
                        JA
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <User />
                    Perfil
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Settings />
                    Configuración
                </DropdownMenuItem>

                <Separator className="my-2" />

                <DropdownMenuItem>
                    <LogOut/>
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
    );
}