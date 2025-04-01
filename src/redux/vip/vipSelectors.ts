import { RconPlayer } from "@/core/types/RconPlayer";
import { RootState } from "../store";

export const selectVipPlayers = (state: RootState): RconPlayer[] => {
  return state.vip.vipPlayers;
};

export const selectVipPlayerById = (
  state: RootState,
  playerId: string
): RconPlayer | undefined => {
  return state.vip.vipPlayers.find((player) => player.playerId === playerId);
};
