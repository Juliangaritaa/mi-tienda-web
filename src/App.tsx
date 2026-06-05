import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/app-router";
import { ThemeProvider } from "@/components/theme/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">  
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
