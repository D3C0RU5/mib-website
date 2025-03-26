export type RconPlayer = {
  playerId: string;
  playerName: string;
  playerAccountId: string;
};

export class RconService {
  static async playersByName(name: string) {
    const response = await fetch(`/api/service/rcon/players`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }
    return (await response.json()) as RconPlayer[];
  }
}
