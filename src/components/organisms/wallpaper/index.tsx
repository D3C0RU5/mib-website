"use client";

import { Logo } from "@/components/atoms/Logo";
import styles from "./styles.module.scss";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { RiVipCrown2Fill } from "react-icons/ri";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function Wallpaper() {
  const handleExternalLink = () => {
    window.open("https://discord.gg/recrutamib");
  };

  return (
    <div className={styles.wallpaper}>
      <div className="z-10">
        <div className="w-full mx-auto text-center items-center p-5">
          <Logo size={400} />
          <h2 className="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Junte-se à Insanidade da MIB!
          </h2>
          <div className="text-sm mt-4 text-gray-400">
            Cansado de jogar em squads mudos e desorganizados? <br />
            Junte-se à Insanidade da MIB!{" "}
            <strong>Estamos online todos os dias!</strong>
          </div>
          <div className="my-10 flex flex-wrap gap-2 justify-center">
            <Button
              onClick={() => handleExternalLink()}
              variant="outline"
              className="bg-transparent hover:bg-discord text-discord hover:text-white border-discord"
            >
              <FaDiscord /> Entre no nosso discord
            </Button>
            <Button
              disabled
              variant="outline"
              className="bg-transparent hover:bg-amber-500 text-amber-500 border-amber-500 hover:text-white "
            >
              <RiVipCrown2Fill /> VIP (em breve)
            </Button>
          </div>
          <div className="mt-7">
            <Button
              disabled
              variant="outline"
              className="w-full bg-transparent hover:bg-zinc-900/30 border-zinc-900 "
            >
              <LiaExternalLinkAltSolid /> Entrar (Em construção)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
