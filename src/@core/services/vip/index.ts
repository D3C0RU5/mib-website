import { RconPlayer } from "@/core/types/RconPlayer";

type AddVip = {
  description: string;
  expiration: string;
  forward: boolean;
  player_id: string;
};

export class VipService {
  static async addVip(addVip: AddVip) {
    const response = await fetch(`/api/service/add-vip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addVip),
    });
    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  }

  static async payment() {
    const response = await fetch(`/api/payment/vip`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  }
}
