"use client";

import { EnlistmentForm } from "../organisms/EnlistmentForm";
import Navbar from "../organisms/navbar";
import { Section } from "../organisms/section";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function EnlistmentTemplate() {
  return (
    <>
      <Navbar />
      <Section title="Aliste-se">
        <EnlistmentForm />
        {/* <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label htmlFor="gamertag">Qual sua gamertag?</Label>
          <Input type="text" id="gamertag" placeholder="Gamertag" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="userid">Qual seu id(Steam/Gamepass/Epic)?</Label>
          <Input type="text" id="userid" placeholder="Seu ID" />
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              Caso não saiba qual seja, peça orientação de algum dos membros do
              clã
            </code>
          </pre>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="userid">Qual seu id(Steam/Gamepass/Epic)?</Label>
          <Input type="text" id="userid" placeholder="Seu ID" />
        </div> */}
        {/* 
          Qual seu id-Steam/ id-Gamepass/id-Epic? (Gamepass/Steam/Epic - caso não saiba qual seja, peça orientação de algum dos membros do clã)
          Você fala outros idiomas além do português?
          *
          Que tipo de jogador mais te define?
          Você deseja se tornar um membro patrocinador? (Servidor do jogo, servidor do discord - Nossos servidores são custeados pelo Comando-Geral da MIB, porém existem jogadores que se identificam com os valores do clã e também gostariam de ajudar, nós queremos saber quem são.)
          Quantas horas de jogo você possui no Hell let loose
          Qual tipo de unidade você mais se identifica?
          Escolha duas classes abaixo. (Principal e secundária)
          Quanto vale um kit de nodos?
          Onde devo construir um kit de nodos?
          Quanto vale uma Garry/guarnição? (Defesa/Ataque)
          Entre no nosso grupo de wpp: (copie e cole no seu navegador)
          Data de aniversário (Ao informar sua data de aniversários, você ganha um vip semanal na semana do aniversário.)
          Este espaço é reservado para você. Conte para nós, mais sobre você, quais jogos já jogou, qual vai ser sua postura (se vai ser mais ofensivo, defensivo ou suporte,quais são as suas expectativas com a MIB, estilo musical... Fique à vontade.
        */}
      </Section>
    </>
  );
}
