
import { client } from "./providers/client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@consensys/connect-button";
import React from "react";
import ConnectWallet from "./components/ConnectWallet";
import UpdateString from "./components/UpdateString";

const App = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1>StringStorage DApp</h1>
    <ConnectWallet />
    <UpdateString />
  </div>
);

export default App;
      