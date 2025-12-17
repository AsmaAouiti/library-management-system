// src/utils/logout.js
export const logout = (navigate) => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  
    alert("Logged out successfully");
    navigate("/login");
  };
  