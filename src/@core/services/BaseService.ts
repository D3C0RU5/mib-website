import { getSession } from "next-auth/react";

export class BaseService {
  static async request<T>(
    url: RequestInfo,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro: ${response.status} - ${errorText}`);
    }

    return response.json();
  }
}
