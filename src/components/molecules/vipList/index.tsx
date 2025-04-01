"use client";

import { VipPlayerLine } from "@/components/atoms/VipPlayerLine";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { selectVipPlayers } from "@/redux/vip/vipSelectors";
import {
  Ellipsis,
  PlusCircleIcon,
  SeparatorHorizontalIcon,
} from "lucide-react";
import { useSelector } from "react-redux";

export const VipList = () => {
  const vipPlayers = useSelector((state: RootState) => selectVipPlayers(state));

  return (
    <div className="grid gap-1 border border-primary-500 p-2 rounded-md bg-gray-900">
      {vipPlayers.map((_vipPlayer) => (
        <VipPlayerLine key={_vipPlayer.playerId} player={_vipPlayer} />
      ))}
      <div className="items-center">
        <div className="flex items-center justify-center mb-1">
          <Ellipsis size={20} />
        </div>
        <Button variant="success" className="w-full" size="icon">
          <PlusCircleIcon /> Adicionar jogador
        </Button>
      </div>
    </div>
  );
};
