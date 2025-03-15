import { Navigate, useNavigate } from "react-router";

export default function AdminGuard({ children }) {

  // Obtenemos el rol del usuario
  const userRole = "client";
  // Si el rol del usuario es admin, retornamos los children
  // en caso contrario, redirigimos al usuario a la página
  return userRole === "admin" ? children : <Navigate to="/" replace />;

}
