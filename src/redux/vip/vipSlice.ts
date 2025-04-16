import { RconPlayer } from "@/core/types/RconPlayer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchVipPlayersAction } from "./vipActions";

type VipState = {
  vipPlayers: RconPlayer[];
};

const initialState: VipState = {
  vipPlayers: [],
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
    addVipPlayers(state, action: PayloadAction<RconPlayer[]>) {
      state.vipPlayers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVipPlayersAction.fulfilled, (state, action) => {
      state.vipPlayers = action.payload;
    });
  },
});

export const { addVipPlayer, removeVipPlayer, addVipPlayers } =
  vipSlice.actions;

export const vipReducer = vipSlice.reducer;
