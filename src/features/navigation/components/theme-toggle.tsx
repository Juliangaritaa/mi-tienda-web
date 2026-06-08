import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

                <span className="sr-only">
                    Cambiar tema
                </span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                onClick={() => setTheme("light")}
                >
                <Sun />
                Claro
                </DropdownMenuItem>


                <DropdownMenuItem
                onClick={() => setTheme("dark")}
                >
                <Moon />
                Oscuro
                </DropdownMenuItem>

                <DropdownMenuItem
                onClick={() => setTheme("system")}
                >
                <Settings />
                Sistema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}