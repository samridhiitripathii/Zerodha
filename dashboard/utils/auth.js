export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location.href = "http://localhost:3000/"; // home page instead of /login
};
