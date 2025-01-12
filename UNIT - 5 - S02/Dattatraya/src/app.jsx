import Navbar from "./Components/Common/Navbar";

import "./app.css";
import AuthProvider from "./context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";

export function App() {
  return (
    <AuthProvider>
      <Navbar />
      <AppRoutes />
    </AuthProvider>
  );
}
