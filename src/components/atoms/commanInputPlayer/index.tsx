import {
  Check,
  CheckCheck,
  ChevronsUpDown,
  LoaderCircle,
  PlusIcon,
  Search,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCallback, useEffect, useState } from "react";
import { RconService } from "@/core/services/rcon";
import { RconPlayer } from "@/core/types/RconPlayer";
import { addVipPlayerAction } from "@/redux/vip/vipActions";
import { useAppDispatch } from "@/redux/store";

export function CommandInputPlayer() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<RconPlayer[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<RconPlayer | null>(null);
  const dispatch = useAppDispatch();

  const handleChangePlayerName = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedPlayer(null);
      setPlayerName(target.value.trim());
    },
    []
  );

  const fetchPlayers = useCallback(() => {
    if (playerName?.length > 2 && !isLoading && !selectedPlayer) {
      setIsLoading(true);
      RconService.playersByName(playerName)
        .then((data) => {
          setPlayers(data);
        })
        .catch((error) => {
          setPlayers([]);
          setIsLoading(false);
        })
        .finally(() => setIsLoading(false));
    }
  }, [playerName]);

  useEffect(() => {
    fetchPlayers();
  }, [playerName, fetchPlayers]);

  const handleOpen = () => {
    setOpen((p) => !p);
  };

  const handleAddPlayer = async () => {
    if (selectedPlayer) {
      await dispatch(addVipPlayerAction(selectedPlayer));
      setSelectedPlayer(null);
    }
  };

  return (
    <>
      <Popover open={open} onOpenChange={handleOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-light text-gray-500 hover:text-gray-400"
          >
            {selectedPlayer?.playerName || "Adicione um novo player"}
            {isLoading ? (
              <LoaderCircle size={13} className="inline animate-spin" />
            ) : (
              <Search className="opacity-50" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 z-50" side="right">
          <Command onChange={handleChangePlayerName} className="w-full">
            <CommandInput
              placeholder="Encontre um player..."
              className="h-9 w-full"
              value={playerName}
            />
            <CommandList>
              <CommandEmpty>Nenhum player encontrado</CommandEmpty>
              <CommandGroup>
                {players.map((_player) => (
                  <CommandItem
                    key={_player.playerAccountId}
                    value={_player.playerName}
                    onSelect={(currentValue) => {
                      if (currentValue === selectedPlayer?.playerName) {
                        setSelectedPlayer(null);
                      } else {
                        setSelectedPlayer(_player);
                      }
                      setOpen(false);
                    }}
                  >
                    {_player.playerName}
                    <Check
                      className={cn(
                        "ml-auto",
                        selectedPlayer?.playerName === _player.playerName
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
      <Button
        variant="success"
        size="sm"
        onClick={handleAddPlayer}
        disabled={!selectedPlayer}
      >
        <PlusIcon />
      </Button>
    </>
  );
}
