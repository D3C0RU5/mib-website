"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../organisms/navbar";
import { Section } from "../organisms/section";
import { Button } from "../ui/button";

export default function HomeTemplate() {
  const handleLoginClick = async () => {
    await signIn("google");
  };
  const handleLogoutClick = async () => {
    await signOut();
  };

  const { status, data } = useSession();

  return (
    <>
      <Navbar />
      <Section title="Teste de título">
        {status === "authenticated" && data.user ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}
      </Section>
    </>
  );
}
