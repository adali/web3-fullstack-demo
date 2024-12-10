// components/ConnectAccount.tsx
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const ConnectAccount: React.FC = () => {
  const account = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <div>
        <h2>Account</h2>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
    </div>
  );
};

export default ConnectAccount;
