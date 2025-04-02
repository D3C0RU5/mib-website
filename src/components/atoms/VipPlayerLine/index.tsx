import { Button } from "@/components/ui/button";
import { RconPlayer } from "@/core/types/RconPlayer";
import { useAppDispatch } from "@/redux/store";
import { removeVipPlayerAction } from "@/redux/vip/vipActions";
import { Trash2 } from "lucide-react";

type VipPlayerLineProps = {
  player: RconPlayer;
};

export const VipPlayerLine = ({ player }: VipPlayerLineProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeVipPlayerAction(player.playerId));
  };

  return (
    <div className="flex justify-between items-center border hover:border-gray-600 py-2 px-3 rounded-md bg-gray-950 hover:bg-gray-900 hover:cursor-pointer ">
      <div className="text-base/5">
        <span className="text-gray-300">{player.playerName}</span>
        <div className="text-gray-600 text-xs">{player.playerAccountId}</div>
      </div>
      <Trash2
        onClick={handleDelete}
        size={18}
        className="text-red-500 hover:text-red-300"
      />
    </div>
  );
};
