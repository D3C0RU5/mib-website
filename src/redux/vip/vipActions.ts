import { RconPlayer } from "@/core/types/RconPlayer";
import { AppDispatch } from "../store";
import { addVipPlayer, removeVipPlayer } from "./vipSlice";

export const addVipPlayerAction = (player: RconPlayer) => {
  return (dispatch: AppDispatch) => {
    dispatch(addVipPlayer(player));
  };
};

export const removeVipPlayerAction = (playerId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(removeVipPlayer(playerId));
  };
};
