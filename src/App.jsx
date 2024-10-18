import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

import { PrimeReactProvider } from "primereact/api";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <PrimeReactProvider>
      <AppRoutes></AppRoutes>
    </PrimeReactProvider>
  );
}

export default App;
