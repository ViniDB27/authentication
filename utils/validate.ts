type User = {
  permissions: string[];
  roles: string[];
};

type ValidateParams = {
  user: User
  permissions?: string[];
  roles?: string[];
};

export function validate({ user, permissions, roles }: ValidateParams) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRole = roles.some((role) => {
      return user.roles.includes(role);
    });

    if (!hasAllRole) {
      return false;
    }
  }

  return true;
}
