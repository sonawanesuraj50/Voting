import { useEffect } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import "./App.css";
import { Vote } from "./Vote";

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});

const App = () => {
  const { activate, deactivate, account, active } = useWeb3React();

  useEffect(() => {
    if (localStorage.getItem("Active") === "true") {
      activate(Injected);
    }
  }, [activate]);

  const connectWallet = () => {
    !active && activate(Injected);
    localStorage.setItem("Active", "true");
  };

  const disconnectWallet = () => {
    deactivate();
    localStorage.clear();
  };

  return (
    <div className="App">
      <div className="connect-btn">
        <button onClick={connectWallet}>
          {active ? "connected" : "Connect"}
        </button>
        <button onClick={disconnectWallet}>disconnect</button>
      </div>
      <div>Account: {account}</div>
      <Vote />
    </div>
  );
};

export default App;
