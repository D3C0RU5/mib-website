"use client";

import { CommandInputPlayer } from "@/components/atoms/commanInputPlayer";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RconPlayer } from "@/core/types/RconPlayer";
import { RconService } from "@/core/services/rcon";
import { useSelector } from "react-redux";
import { selectVipPlayers } from "@/redux/vip/vipSelectors";
import { useAppDispatch } from "@/redux/store";
import { fetchVipPlayersAction } from "@/redux/vip/vipActions";

const formSchema = z.object({
  buyingForMe: z.boolean(),
  playerName: z.string(),
  playerID: z
    .string()
    .min(5, "É preciso escolher um player para definir o VIP"), // TODO: should validate id formats(steam, epic, etc..)
});

export default function VipForm() {
  const [players, setPlayers] = useState<RconPlayer[]>([]);
  const [playerName, setPlayerName] = useState<string>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buyingForMe: true,
      playerName: "",
      playerID: "",
    },
  });

  useEffect(() => {
    if (playerName) {
      RconService.playersByName(playerName)
        .then((data) => {
          setPlayers(data);
        })
        .catch((error) => {
          console.error("Erro ao buscar jogadores:", error);
          setPlayers([]);
        });
    }
  }, [playerName]);

  function handleSubmit(values: z.infer<typeof formSchema>) {}

  function handleChangePlayerName({
    target,
  }: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(target.value);
  }

  return (
    <Form {...form}>
      <CommandInputPlayer />
      <hr className="my-5" />
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <Input
          placeholder="Nick do jogador"
          onChange={handleChangePlayerName}
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
    </Form>
  );
}
