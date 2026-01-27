"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

type Role = "ADMIN" | "ORGANIZADOR" | "ASISTENTE" | "SCANNER";

type StoredUser = {
  role: Role;
};

const roleRedirects: Record<Role, string> = {
  ADMIN: "/admin/dashboard",
  ORGANIZADOR: "/organizer/dashboard",
  ASISTENTE: "/dashboard",
  SCANNER: "/scanner",
};

export default function RoleGuard({
  allowedRoles,
  children,
}: {
  allowedRoles: Role[];
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { allowed, redirectTo } = useMemo(() => {
    if (typeof window === "undefined") {
      return { allowed: false, redirectTo: "/auth/login" };
    }
    try {
      const raw = localStorage.getItem("acadevent_user");
      if (!raw) {
        return { allowed: false, redirectTo: "/auth/login" };
      }
      const user = JSON.parse(raw) as StoredUser;
      if (!user?.role || !allowedRoles.includes(user.role)) {
        const target = user?.role ? roleRedirects[user.role] : "/auth/login";
        return { allowed: false, redirectTo: target ?? "/auth/login" };
      }
      return { allowed: true, redirectTo: null };
    } catch {
      return { allowed: false, redirectTo: "/auth/login" };
    }
  }, [allowedRoles]);

  useEffect(() => {
    if (!allowed && redirectTo) {
      router.replace(redirectTo);
    }
  }, [allowed, redirectTo, router]);

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}
