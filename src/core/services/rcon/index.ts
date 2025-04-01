import { RconPlayer } from "@/core/types/RconPlayer";

export class RconService {
  static async playersByName(name: string) {
    const params = new URLSearchParams({
      name,
    });
    const response = await fetch(
      `/api/service/rcon/players?${params.toString()}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    return result as RconPlayer[];
  }
}
