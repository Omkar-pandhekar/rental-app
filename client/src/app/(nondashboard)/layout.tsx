"use client";

import React, { useEffect, useState } from "react";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import Navbar from "@/components/layouts/Navbar";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        (userRole === "manager" && pathname.startsWith("/search")) ||
        (userRole === "manager" && pathname.startsWith("/"))
      ) {
        router.push("/managers/properties", { scroll: false });
      } else {
        setIsLoading(false);
      }
    }
  }, [authUser, router, pathname]);

  if (authLoading || isLoading) return <>Loading...</>;

  console.log("AuthUser:", authUser);
  return (
    <>
      <div className="h-full w-full">
        <Navbar />

        <main
          className={`h-full  w-full `}
          style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
