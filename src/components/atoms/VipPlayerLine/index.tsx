import { RconPlayer } from "@/core/types/RconPlayer";
import { RootState, useAppDispatch } from "@/redux/store";
import { removeVipPlayerAction } from "@/redux/vip/vipActions";
import { selectedVip } from "@/redux/vip/vipSelectors";
import { selectVipPlayer } from "@/redux/vip/vipSlice";
import { Trash2 } from "lucide-react";
import { useSelector } from "react-redux";

type VipPlayerLineProps = {
  player: RconPlayer;
};

export const VipPlayerLine = ({ player }: VipPlayerLineProps) => {
  const dispatch = useAppDispatch();
  const selectedPlayer = useSelector((state: RootState) => selectedVip(state));

  const handleDelete = () => {
    dispatch(removeVipPlayerAction(player.playerId));
  };

  const handleSelect = () => {
    dispatch(selectVipPlayer(player));
  };

  const isSelected = () => {
    return selectedPlayer?.playerId === player.playerId;
  };

  return (
    <div
      className={`flex justify-between items-center border py-2 px-3 rounded-md hover:cursor-pointer bg-gray-950 hover:bg-gray-900 ${
        isSelected() ? "border-l-4 border-green-600" : "hover:border-gray-600"
      }`}
      onClick={handleSelect}
    >
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
