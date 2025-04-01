import { RconPlayer } from "@/core/types/RconPlayer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type VipState = {
  vipPlayers: RconPlayer[];
};

const initialState: VipState = {
  vipPlayers: [
    {
      playerAccountId: "12345account",
      playerId: "someidplayer",
      playerName: "Taynara",
    },
    {
      playerAccountId: "96785account",
      playerId: "anotheridplayer",
      playerName: "Reaper",
    },
    {
      playerAccountId: "12345account",
      playerId: "animalidplayer",
      playerName: "Teeteto",
    },
  ],
};

const vipSlice = createSlice({
  name: "vipPlayers",
  initialState,
  reducers: {
    addVipPlayer(state, action: PayloadAction<RconPlayer>) {
      state.vipPlayers.push(action.payload);
    },
    removeVipPlayer(state, action: PayloadAction<string>) {
      state.vipPlayers = state.vipPlayers.filter(
        (player) => player.playerId !== action.payload
      );
    },
  },
});

export const { addVipPlayer, removeVipPlayer } = vipSlice.actions;

export const vipReducer = vipSlice.reducer;
