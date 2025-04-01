"use client";

import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export const AppProvider = ({ children }: any) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};
