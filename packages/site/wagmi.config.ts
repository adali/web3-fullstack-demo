
import { http, createConfig } from "wagmi";
import { localhost, sepolia } from "wagmi/chains";
import { metaMask, injected, coinbaseWallet} from "wagmi/connectors";


export const config = createConfig({
  chains: [localhost, sepolia],
  connectors: [
    metaMask({
      dappMetadata: {
        name: "MetaMask SDK + Wagmi Tutorial",
        url: "https://wagmi.io",
        iconUrl: "https://wagmi.io/favicon.ico",
      },
    }),
    injected(),    
    coinbaseWallet(),
  ],
  transports: {
    [localhost.id]: http(),
    [sepolia.id]: http(),
  },
});

