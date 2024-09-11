"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function Providers({
  children,
  session
}: {
  children: ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <ConvexProvider client={convex}>
        {children}
      </ConvexProvider>;
    </SessionProvider>
  )
}