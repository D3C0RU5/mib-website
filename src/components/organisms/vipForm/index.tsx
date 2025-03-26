"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RconPlayer, RconService } from "@/services/rcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  buyingForMe: z.boolean(),
  playerName: z.string(),
  playerID: z
    .string()
    .min(5, "É preciso escolher um player para definir o VIP"), // TODO: should validate id formats(steam, epic, etc..)
});

export default function VipForm() {
  const [players, setPlayers] = useState<RconPlayer[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buyingForMe: true,
      playerName: "",
      playerID: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {}

  async function handleChangePlayerName() {
    const _players = await RconService.playersByName("");
    console.log(_players);
    setPlayers(_players);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="playerID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nick do jogador</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nick do jogador"
                  {...field}
                  onChange={handleChangePlayerName}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="playerID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Selecione o Nickname</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Nicknames" />
                  </SelectTrigger>
                  <SelectContent>
                    {players.map((_player) => (
                      <SelectItem
                        key={_player.playerId}
                        value={_player.playerAccountId}
                      >
                        {_player.playerName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      {players.map((_p) => (
        <span key={_p.playerAccountId}>{_p.playerName}</span>
      ))}
    </Form>
  );
}
