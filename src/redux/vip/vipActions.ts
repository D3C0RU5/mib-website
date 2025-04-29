import { RconPlayer } from "@/core/types/RconPlayer";
import { AppDispatch } from "../store";
import { addVipPlayer, removeVipPlayer } from "./vipSlice";
import { AccountService } from "@/@core/services/account";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addVipPlayerAction = (player: RconPlayer) => {
  return async (dispatch: AppDispatch) => {
    try {
      await AccountService.associatePlayerToAccount(player);
      dispatch(addVipPlayer(player));
    } catch (error) {
      console.error("Erro ao associar player:", error);
    }
  };
};

export const removeVipPlayerAction = (playerId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(removeVipPlayer(playerId));
  };
};

export const fetchVipPlayersAction = createAsyncThunk<RconPlayer[]>(
  "vip/fetchVipPlayers",
  async (_, thunkAPI) => {
    try {
      const players = await AccountService.getAssociatedPlayers();
      return players;
    } catch (err) {
      console.error("Erro ao recuperar players:", err);
      return thunkAPI.rejectWithValue("Erro ao buscar players");
    }
  }
);
