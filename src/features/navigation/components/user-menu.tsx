import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";

export function UseMenu() {
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
                    Perfil
                </DropdownMenuItem>

                <DropdownMenuItem>
                    Configuración
                </DropdownMenuItem>

                <DropdownMenuItem>
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
            
        </DropdownMenu>
    );
}