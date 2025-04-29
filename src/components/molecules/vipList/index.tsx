"use client";

import { VipPlayerLine } from "@/components/atoms/VipPlayerLine";
import { RootState, useAppDispatch } from "@/redux/store";
import { allVipPlayers } from "@/redux/vip/vipSelectors";
import { Ellipsis } from "lucide-react";
import { useSelector } from "react-redux";
import { CommandInputPlayer } from "@/components/atoms/commanInputPlayer";
import { useEffect } from "react";
import { fetchVipPlayersAction } from "@/redux/vip/vipActions";

export const VipList = () => {
  const players = useSelector((state: RootState) => allVipPlayers(state));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchVipPlayersAction());
  }, [dispatch]);

  return (
    <>
      <div className="grid gap-1 border border-primary-500 p-2 rounded-md bg-gray-900">
        {players.map((_player) => (
          <VipPlayerLine key={_player.playerId} player={_player} />
        ))}
        <div className="items-center">
          <div className="flex items-center justify-center mb-1">
            <Ellipsis size={20} />
          </div>
          <div className="flex gap-1 items-center w-full">
            <CommandInputPlayer />
          </div>
        </div>
      </div>
    </>
  );
};
