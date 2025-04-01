import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { RconService } from "@/core/services/rcon";
import { Popover } from "@radix-ui/react-popover";
import { Check, CheckIcon, ChevronsUpDown, LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCallback, useEffect, useState } from "react";
import { FormItem, FormLabel } from "@/components/ui/form";
import { RconPlayer } from "@/core/types/RconPlayer";

export function CommandInputPlayer() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<RconPlayer[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<RconPlayer | null>(null);

  const handleChangePlayerName = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedPlayer(null);
      setPlayerName(target.value);
    },
    []
  );

  const fetchPlayers = useCallback(() => {
    if (playerName.length > 2 && !isLoading && !selectedPlayer) {
      setIsLoading(true);
      RconService.playersByName(playerName)
        .then((data) => setPlayers(data))
        .catch((error) => {
          console.error("Erro ao buscar jogadores:", error);
          setPlayers([]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [playerName, selectedPlayer]);

  useEffect(() => {
    fetchPlayers();
  }, [playerName, fetchPlayers]);

  return (
    <div className="flex gap-2">
      <FormItem>
        <FormLabel>Player name</FormLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="w-[300px] justify-between items-center flex">
              <Button
                variant="outline"
                disabled={isLoading}
                role="combobox"
                aria-expanded={open}
                className="w-[300px] justify-between flex"
              >
                {playerName.trim()
                  ? players.find((_player) => _player.playerName === playerName)
                      ?.playerName || "Selecione o nick"
                  : "Selecione o nick"}
                {isLoading ? (
                  <LoaderCircle className="w-[50px] inline animate-spin" />
                ) : (
                  <ChevronsUpDown className="opacity-50" />
                )}
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[365px] p-0">
            <Command onChange={handleChangePlayerName}>
              <CommandInput
                placeholder="Busque um nickname..."
                className="h-9"
              />
              <CommandList>
                <CommandEmpty>Nenhum nickname encontrado.</CommandEmpty>
                <CommandGroup>
                  {players.map((_player) => (
                    <CommandItem
                      key={_player.playerName}
                      value={_player.playerName}
                      onSelect={(currentValue) => {
                        setPlayerName(
                          currentValue === playerName ? "" : currentValue
                        );
                        setSelectedPlayer(_player);
                        setOpen(false);
                      }}
                    >
                      {_player.playerName}
                      <Check
                        className={cn(
                          "ml-auto",
                          playerName === _player.playerName
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </FormItem>
      <FormItem>
        <FormLabel>Player account id</FormLabel>
        <Input
          disabled
          className="disabled:opacity-25"
          value={selectedPlayer?.playerAccountId || "--"}
        />
      </FormItem>
      <FormItem>
        <FormLabel>Player account id</FormLabel>
        <div>
          <Button variant="default" size="icon">
            <CheckIcon />
          </Button>
        </div>
      </FormItem>
    </div>
  );
}
