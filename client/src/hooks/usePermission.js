import useAuth from "./useAuth";

const usePermission = () => {
  const { role } = useAuth();
  const hasRole = (...roles) => role && roles.includes(role);
  return { hasRole };
};

export default usePermission;
