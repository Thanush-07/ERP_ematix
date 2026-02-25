export const getRoleFromToken = (token) => {
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch {
    return null;
  }
};

export const hasRole = (user, ...roles) => user && roles.includes(user.role);
