"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { WebsocketProvider, socket } from "./context/WebsocketContext";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <TonConnectUIProvider
        manifestUrl={`https://${process.env.NUXT_PUBLIC_FRONTEND_URL}/tonconnect-manifest.json`}
      >
        <WebsocketProvider value={socket}>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </WebsocketProvider>
      </TonConnectUIProvider>
    </NextUIProvider>
  );
}
