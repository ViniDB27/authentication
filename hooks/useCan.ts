import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { validate } from "../utils/validate";

type UserCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UserCanParams) {
  const { user, isAuthenticate } = useContext(AuthContext);

  if (!isAuthenticate) {
    return false;
  }

  return validate({
    user,
    permissions,
    roles,
  });
}
