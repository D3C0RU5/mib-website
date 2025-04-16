import { RconPlayer } from "@/core/types/RconPlayer";
import { BaseService } from "../BaseService";

export class AccountService {
  static async associatePlayerToAccount(player: RconPlayer) {
    return BaseService.request<RconPlayer>("/api/service/account/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ player }),
    });
  }

  static async getAssociatedPlayers() {
    return BaseService.request<RconPlayer[]>("/api/service/account/players", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
