import useAuthStore from "../store/authStore";

const useAuth = () => {
  const { user, token, role, login, logout } = useAuthStore();
  const isAuthenticated = !!token;
  return { user, token, role, login, logout, isAuthenticated };
};

export default useAuth;
