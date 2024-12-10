// components/DisplayWallets.tsx
import React from 'react';
import { useConnect } from 'wagmi';

const DisplayWallets: React.FC = () => {
  const { connectors, connect, status, error } = useConnect();

  return (
    <div>
      <h2>Connect Wallets </h2>
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          type="button"
        >
          {connector.name}
        </button>
      ))}
      <div>Status: {status}</div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default DisplayWallets;
