
import { http, createConfig } from "wagmi";
import { localhost, sepolia } from "wagmi/chains";
import { metaMask, injected } from "wagmi/connectors";


export const config = createConfig({
  chains: [localhost, sepolia],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [localhost.id]: http(),
    [sepolia.id]: http(),
  },
});

