import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Navbar() { // Ya fir aapka Dashboard Header
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Local storage se data saaf karein
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // 2. Ek pyaara sa confirmation popup
    Swal.fire({
      title: "Logged Out",
      text: "You have been logged out successfully!",
      icon: "info",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      // 3. Login page par bhej dein
      navigate("/login");
      // Page refresh karne ke liye (optional):
      // window.location.reload(); 
    });
  };

  return (
    <button onClick={handleLogout} className="btn btn-outline-danger">
      Logout
    </button>
  );
}