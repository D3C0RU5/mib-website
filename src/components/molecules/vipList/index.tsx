"use client";

import { VipPlayerLine } from "@/components/atoms/VipPlayerLine";
import { RootState, useAppDispatch } from "@/redux/store";
import { selectVipPlayers } from "@/redux/vip/vipSelectors";
import { Ellipsis } from "lucide-react";
import { useSelector } from "react-redux";
import { CommandInputPlayer } from "@/components/atoms/commanInputPlayer";
import { useEffect } from "react";
import { fetchVipPlayersAction } from "@/redux/vip/vipActions";

export const VipList = () => {
  const vipPlayers = useSelector((state: RootState) => selectVipPlayers(state));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchVipPlayersAction());
  }, []);

  return (
    <>
      <div className="grid gap-1 border border-primary-500 p-2 rounded-md bg-gray-900">
        {vipPlayers.map((_vipPlayer) => (
          <VipPlayerLine key={_vipPlayer.playerId} player={_vipPlayer} />
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
