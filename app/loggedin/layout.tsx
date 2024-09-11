import type { Metadata } from "next";
import { Providers } from "../providers";
import { auth } from "@/auth";


export const metadata: Metadata = {
  title: "ToDo Smart",
  description: "ToDo Smart - Keep up with your tasks! Seamlessly organize your tasks and use AI to help you on the way.",
};

export default async function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return <Providers session={session}>{children}</Providers>
}