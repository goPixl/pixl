import 'styles/global.css'

import React, { FC, useMemo } from "react";
import { AppProps } from 'next/app';
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  // SolletExtensionWalletAdapter,
  // SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  createDefaultAuthorizationResultCache,
  SolanaMobileWalletAdapter,
} from "@solana-mobile/wallet-adapter-mobile";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");


function MyApp({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      // new SolanaMobileWalletAdapter({
      //   appIdentity:{ name: "Solana Wallet Adapter App" },
      //   authorizationResultCache: createDefaultAuthorizationResultCache(),
      // }),
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
              <ThemeProvider attribute="class" defaultTheme="dark">
                <Component {...pageProps} />
              </ThemeProvider>
            </SessionProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}
export default function AppWithFirebase(props: AppProps) {
  return <MyApp {...props} />;
}
